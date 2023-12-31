import {Component, OnInit, signal} from '@angular/core';
import {Ressource} from "../model/Ressource";
import {RessourceService} from "../services/ressource.service";
import {Reservation} from "../model/Reservation";
import {ReservationService} from "../services/reservation.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] | undefined;
  resources: Ressource[] | undefined;
  reservation: Reservation | undefined;
  user_id: number | undefined;

  constructor(private reservationService: ReservationService, private ressourceService: RessourceService) {
  }

  ngOnInit(): void {

    this.user_id = 1;
    this.fetchResources();
    this.fetchUserReservations()

  }


  fetchResources() {
    this.ressourceService.getResources().subscribe({
      next: (data: Ressource[]) => {
        this.resources = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  fetchUserReservations() {
    this.reservationService.getReservationsByUserId(this.user_id).subscribe({
      next: (data: Reservation[]) => {
        this.reservations = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }


  onSubmit(form: NgForm) {

    if (form.valid) {
      const formData = form.value;
      formData.personId = this.user_id;
      this.reservationService.addReservation(formData).subscribe({
        error: (err: any) => {
          console.log(err);
        }
      })
      console.log(formData);
      this.fetchUserReservations();
      form.resetForm();
    }
  }
}
