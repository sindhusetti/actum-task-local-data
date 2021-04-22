import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

/*User Data Interface*/
export interface User {
  name: string;
  position: number;
  location: string;
  progLang: string[];
}
/*User Data*/
const User_Data: User[] = [
  {
    position: 1,
    name: "James",
    location: "Czech Republic",
    progLang: ["Java", "HTML", "VBscript"]
  },

  {
    position: 2,
    name: "Markus",
    location: "America",
    progLang: ["VBScript", "HTML5", "CSS3"]
  },
  {
    position: 3,
    name: "Lucie",
    location: "Mexico",
    progLang: ["HTML", "jQuery", "Bootstrap"]
  },
  {
    position: 4,
    name: "Tejas",
    location: "Italy",
    progLang: ["Javascript", "HTML"]
  },
  {
    position: 5,
    name: "Sindhu",
    location: "India",
    progLang: ["Javascript", "Typescript"]
  },
  {
    position: 6,
    name: "Krishna",
    location: "Russia",
    progLang: ["Javascript"]
  },
  {
    position: 7,
    name: "Teja",
    location: "Germany",
    progLang: ["Javascript"]
  },
  { position: 8, name: "David", location: "France", progLang: ["Java"] },
  {
    position: 9,
    name: "Yakshu",
    location: "Croatia",
    progLang: ["Javascript,CSS"]
  },
  {
    position: 10,
    name: "Warner",
    location: "Germany",
    progLang: ["CSS"]
  }
];

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  /*Column headers*/
  displayedColumns = ["position", "name", "location", "progLang"];
  dataSource = new MatTableDataSource<User>(User_Data);
  /*Pagination Logic*/
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /*Inputfield Filter*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
