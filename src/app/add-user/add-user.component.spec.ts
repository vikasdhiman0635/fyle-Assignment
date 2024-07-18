import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const storageData: any = [
  { userName: 'test', workoutType: "Running", workoutMinutes: 20 },
  { userName: 'test1', workoutType: "Swiming", workoutMinutes: 50 },
  { userName: 'test2', workoutType: "Yoga", workoutMinutes: 25 }
]

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddUserComponent,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        BrowserModule,
        RouterOutlet
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be check checkUSer method when return true', () => {
    component.storageData = [
      {
        userName: 'test'
      }
    ]
    const data: any = {
      userName: 'test'
    }
    const return_spy = component.checkUSer(data);
    expect(return_spy).toBe(true);
  });

  it('should be check checkUSer method when return false', () => {
    component.storageData = [
      {
        userName: 'test'
      }
    ]
    const data: any = {
      userName: 'test1'
    }
    const return_spy = component.checkUSer(data);
    expect(return_spy).toBe(false);
  });

  it('should be test addUserSubmit method when I dont have data in localstorage', () => {
    component.addUser.get("userName").setValue('test');
    // localStorage.setItem('users', JSON.stringify(storageData));

    component.addUser.get("workoutType").setValue('Running');
    component.addUser.get("workoutMinutes").setValue('30');
    component.addUserSubmit();
    expect(component.storageData).toBeTruthy();
  });

  it('should be test addUserSubmit method when I have data in localstorage', () => {
    component.addUser.get("userName").setValue('test');
    localStorage.setItem('users', JSON.stringify(storageData));

    component.addUser.get("workoutType").setValue('Running');
    component.addUser.get("workoutMinutes").setValue('30');
    jest.spyOn(component, 'checkUserExist');
    component.addUserSubmit();
    expect(component.storageData).toBeTruthy();
  });

});
