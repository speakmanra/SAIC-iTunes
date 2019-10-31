import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { ListComponent } from "./list/list.component";
import { ApiService } from "./api.service";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { CdkTableModule } from "@angular/cdk/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PlatformModule } from "@angular/cdk/platform";

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatProgressSpinnerModule,
    PlatformModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
