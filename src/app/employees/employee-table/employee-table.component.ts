import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  employees:any;

  constructor(public employeeService: EmployeeService) {}

    ngOnInit() {
    this.employeeService.getData();
    this.employeeService.data$.subscribe(employee =>{
      this.employees =employee
      this.sortEmployeesByHours();
    });
  }
  sortEmployeesByHours() {
    this.employees.sort((a: { totalTimeInHours: number; }, b: { totalTimeInHours: number; }) => b.totalTimeInHours - a.totalTimeInHours);
  }
}
