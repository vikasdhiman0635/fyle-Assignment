import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatTableDataSource } from '@angular/material/table';
import { ChartComponent } from "../chart/chart.component";

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrl: './filter-user.component.scss'
})
export class FilterUserComponent implements OnInit {

  data: any;

  displayedColumns: string[] = ['Name', 'Workouts', 'No', 'time'];
  dataSource = new MatTableDataSource<any>();

  @Input()
  storageData: any;

  constructor() { }
  ngOnInit(): void {
    this.dataSource = this.storageData;
  }

}
