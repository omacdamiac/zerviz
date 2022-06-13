import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataPresenterService {
  countries: string[];
  notImage: string;

  constructor() {
    this.notImage = `${environment.url_notImage}`;
  }
}
