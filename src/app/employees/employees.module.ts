import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpHeaders, provideHttpClient } from '@angular/common/http';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@NgModule({
  declarations: [
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    EmployeeTableComponent
  ]
})
export class EmployeesModule { }
