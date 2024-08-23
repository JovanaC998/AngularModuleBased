import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpHeaders, provideHttpClient } from '@angular/common/http';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeChartComponent } from './employee-chart/employee-chart.component';

@NgModule({
  declarations: [
    EmployeeTableComponent, EmployeeChartComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    EmployeeTableComponent, EmployeeChartComponent
  ]
})
export class EmployeesModule { }
