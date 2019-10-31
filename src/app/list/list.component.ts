import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  songs: any[];
  displayedColumns: string[] = ["artist", "song", "album"];
  dataSource = this.songs;
  resultsReturned: boolean = false;
  isLoading: boolean = false;
  searchQuery;

  // If data is returned successfully
  handleSuccess(data) {
    this.resultsReturned = true;
    this.songs = data.results;
    console.log(data.results);
  }

  // Error
  handleError(error) {
    console.log(error);
  }

  // Handle iTunes JSON data
  constructor(private apiService: ApiService) {}
  searchItunes(query: string) {
    this.isLoading = true;
    return this.apiService
      .getResults(query)
      .subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => (this.isLoading = false)
      );
  }

  ngOnInit() {}
}
