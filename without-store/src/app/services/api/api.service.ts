import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Results } from "../../interfaces/results";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  URL: string = "https://swapi.co/api";

  constructor(private http: HttpClient) {}

  getData(data): Observable<Results> {
    return this.http.get<Results>(`${this.URL}${data}`);
  }

  getNextPage(data): Observable<Results> {
    return this.http.get<Results>(data);
  }
}
