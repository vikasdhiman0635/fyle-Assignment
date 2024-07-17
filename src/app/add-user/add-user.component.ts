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

  constructor(private fb: FormBuilder) {
    this.addUser = fb.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      workoutMinutes: ['', Validators.required]
    })
  }

  addUserSubmit() {
    console.log(this.addUser.value);
    localStorage.setItem("users", JSON.stringify(this.addUser.value));
  }

}
