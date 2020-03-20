import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { url } from "inspector";

@Injectable({
  providedIn: "root"
})
export class MashvisorService {
  constructor(private http: HttpClient) {}

  search(state: string) {
    let url: string = "https://api.mashvisor.com/v1.1/client/city/investment/";
    return this.http.get(url + state + "/Los%20Angeles", {
      headers: {
        "x-api-key": "db7799e3-50f9-4754-9439-89aa0a2eb319"
      }
    });
  }
}
