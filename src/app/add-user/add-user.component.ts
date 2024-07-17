import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterUserComponent } from "../filter-user/filter-user.component";

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FilterUserComponent
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  addUser: FormGroup | any;

  storageData = new Array<any>();

  constructor(private fb: FormBuilder) {
    let data: any = localStorage.getItem('users');
    this.storageData = JSON.parse(data);
    this.addUser = fb.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      workoutMinutes: ['', Validators.required]
    })
  }

  addUserSubmit() {
    console.log(this.addUser.value);
    let data = {
      userName: this.addUser.value.userName,
      workoutType: this.addUser.value.workoutType,
      workoutMinutes: this.addUser.value.workoutMinutes
    }
    // this.checkUserExist(this.addUser.value.userName);
    // if (this.storageData.length > 0) {

    // }
    // else {

    //   this.storageData.push(this.addUser.value);
    // }
    this.storageData.push(data)
    localStorage.setItem("users", JSON.stringify(this.storageData));
  }

  checkUserExist(userName: string) {
    for (let i = 0; i < this.storageData.length; i++) {
      if (this.storageData[i].userName === userName) {
        console.log(true);
      }
      else {
        console.log(false);
      }
    }
  }

}
