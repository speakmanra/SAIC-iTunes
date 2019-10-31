import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs-compat/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private URLBase: string = "https://itunes.apple.com/search?term=";
  private URLLimit: string = "&limit=3&media=music";

  constructor(private httpClient: HttpClient) {}
  //search query get request
  public getResults(query) {
    return this.httpClient.get(this.URLBase + query + this.URLLimit);
  }
}
