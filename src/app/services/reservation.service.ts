import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ressource} from "../model/Ressource";
import {Reservation} from "../model/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = "http://localhost:9999/reservation-service/api/";
  constructor(private http: HttpClient) {}


  getReservationsByUserId(user_id: number | undefined): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.url+"persons/"+user_id+"/reservations");
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.url+"reservations", reservation);
  }

}
