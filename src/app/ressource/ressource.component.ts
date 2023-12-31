import {Component, OnInit} from '@angular/core';
import {Ressource} from "../model/Ressource";
import {RessourceService} from "../services/ressource.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css'
})
export class RessourceComponent implements OnInit{


  ressources : Ressource[] | undefined;
  constructor(private ressourceService: RessourceService) { }
  ngOnInit(): void {

    this.fetchResources();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      this.ressourceService.addResource(formData).subscribe({
        error: (err: any) => {
          console.log(err);
        }
      })
      this.fetchResources();
      form.resetForm();
    }
  }

  private fetchResources() {
    this.ressourceService.getResources().subscribe({
      next: (data: Ressource[]) => {
        this.ressources = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}
