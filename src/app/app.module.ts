import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { AppComponent } from "./app.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
