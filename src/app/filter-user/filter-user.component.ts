import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

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

  constructor() {
    let localData = localStorage.getItem("users");
    // this.data = JSON.parse(localData);
    console.log(JSON.parse(localData));
  }

}
