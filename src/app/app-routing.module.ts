import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RessourceComponent} from "./ressource/ressource.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'ressource', component: RessourceComponent, canActivate : [AuthGuard], data : {roles:['ADMIN']}},
  { path: 'reservation', component: ReservationComponent, canActivate : [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
