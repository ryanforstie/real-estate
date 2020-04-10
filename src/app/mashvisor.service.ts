import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface MashvisorTopPropertyResponse {
  content: {
    properties: [];
  };
}

interface MashvisorTopMarketResponse {
  content: [];
}

@Injectable({
  providedIn: "root",
})
export class MashvisorService {
  constructor(private http: HttpClient) {}

  topCityPropertiesSearch(state: string, city: string) {
    let url: string =
      "https://cors-anywhere.herokuapp.com/https://api.mashvisor.com/v1.1/client/city/properties/";
    return this.http.get<MashvisorTopPropertyResponse>(
      url + state + "/" + city,
      {
        headers: {
          "x-api-key": "db7799e3-50f9-4754-9439-89aa0a2eb319",
        },
      }
    );
  }

  topMarketSearch(state: string) {
    let url: string =
      "https://cors-anywhere.herokuapp.com/https://api.mashvisor.com/v1.1/client/city/top-markets?state=";
    return this.http.get<MashvisorTopMarketResponse>(url + state, {
      headers: {
        "x-api-key": "db7799e3-50f9-4754-9439-89aa0a2eb319",
      },
    });
  }
}
