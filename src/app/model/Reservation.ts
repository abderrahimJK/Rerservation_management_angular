import {Person} from "./Person";

export interface Reservation{

  id: number;
  name: string;
  context: string;
  date : Date;
  duration: string;
  resourceId: number;
  personId: number;
}
