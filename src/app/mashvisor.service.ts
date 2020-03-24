import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface MashvisorResponse {
  content: {
    median_price: number;
  };
}

@Injectable({
  providedIn: "root"
})
export class MashvisorService {
  constructor(private http: HttpClient) {}

  search(state: string) {
    let url: string =
      "https://cors-anywhere.herokuapp.com/https://api.mashvisor.com/v1.1/client/city/properties/";
    return this.http.get<MashvisorResponse>(url + state + "/Seattle", {
      headers: {
        "x-api-key": "db7799e3-50f9-4754-9439-89aa0a2eb319"
      }
    });
  }
}
