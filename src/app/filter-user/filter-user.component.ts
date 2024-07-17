import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filter-user',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './filter-user.component.html',
  styleUrl: './filter-user.component.scss'
})
export class FilterUserComponent {

  data: any;

  displayedColumns: string[] = ['Name', 'Workouts', 'No', 'time'];
  dataSource = new MatTableDataSource<any>();

  constructor() {
    let localData: any = localStorage.getItem("users");
    // this.data = JSON.parse(localData);
    console.log(JSON.parse(localData));
  }

}
