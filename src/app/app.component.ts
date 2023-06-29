import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
export interface PeriodicElement {
  identificacion: string;
  nombres: string;
  apellidos: string;
  tipocontrato: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'taller-frontend';

  displayedColumns: string[] = ['identificacion', 'nombres', 'apellidos', 'tipocontrato'];
  dataSource: Array<PeriodicElement> = [];


  ngOnInit(): void {
     this.http.get<any>('http://localhost:3000/docentes').subscribe(value => {
       console.log(value);
       this.dataSource = value;
     });
  }

}
