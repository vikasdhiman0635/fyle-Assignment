import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './chart/chart.component';

import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import * as CanvasJSAngularChart from '../../assets/canvasjs.angular.component';
import { FilterUserComponent } from './filter-user/filter-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    ChartComponent,
    FilterUserComponent,
    AddUserComponent,
    CanvasJSChart
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class UserModule { }
