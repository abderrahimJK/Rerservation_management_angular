import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ressource} from "../model/Ressource";

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private url = "http://localhost:9999/ressource-service/api/";
  constructor(private http: HttpClient) {}

  getResources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.url+"resources");
  }

  addResource(resource: Ressource): Observable<Ressource> {
    return this.http.post<Ressource>(this.url+"resources", resource);
  }
}
