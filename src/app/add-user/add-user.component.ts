import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup | any;

  data: any;

  displayedColumns: string[] = ['Name', 'Workouts', 'No', 'time'];
  dataSource = new MatTableDataSource<any>();


  storageData: any = [];


  constructor(private fb: FormBuilder) {
    this.addUser = fb.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      workoutMinutes: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    let data: any = localStorage.getItem('users');
    const fianlData = JSON.parse(data);
    if (fianlData != null) {
      for (let i = 0; i < fianlData.length; i++) {
        this.storageData.push(fianlData[i]);
      }
      this.dataSource = this.storageData;
    }
  }

  addUserSubmit() {
    let data: any = {
      userName: this.addUser.value.userName,
      workoutType: this.addUser.value.workoutType,
      workoutMinutes: this.addUser.value.workoutMinutes
    }
    if (this.storageData.length > 0) {
      this.checkUserExist(data);
    }
    else {
      data.totalworkout = 1;
      this.storageData.push(data);
      this.dataSource.data = this.storageData;
      localStorage.setItem("users", JSON.stringify(this.storageData));
    }
  }

  checkUserExist(data: any) {
    this.dataSource = new MatTableDataSource<any>();
    if (!this.checkUSer(data)) {
      data.totalworkout = 1;
      this.storageData[this.storageData.length] = data;
    }
    else if (this.checkUSer(data)) {
      for (let i = 0; i < this.storageData.length; i++) {
        let setWorkout = `${this.storageData[i]?.workoutType}, ${data.workoutType}`;
        let setupWorkouts = setWorkout.split(",");
        if (this.storageData[i]?.userName === data?.userName) {
          if (this.storageData[i].workoutType.includes(data.workoutType)) { }
          else {
            this.storageData[i].workoutType = setWorkout;
            this.storageData[i].totalworkout = setupWorkouts.length;
          }
          let count = (this.storageData[i].workoutMinutes + data.workoutMinutes);
          this.storageData[i].workoutMinutes = count;
        }
      }
    }
    this.dataSource.data = this.storageData;
    localStorage.setItem("users", JSON.stringify(this.storageData));
  }

  checkUSer(data: any): boolean {
    for (let i = 0; i < this.storageData.length; i++) {
      if (data?.userName === this.storageData[i]?.userName) {
        return true;
      }
    }
    return false;
  }

}
