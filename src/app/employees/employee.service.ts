import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';

export interface Employees {
  EmployeeName: string;
  StarTimeUtc: string;
  EndTimeUtc: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private data = new BehaviorSubject<any[]>([]);
  data$ = this.data.asObservable();

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private api: string,
    @Inject('API_HEADERS') private header: HttpHeaders
  ) {}

  getData() {
    this.http.get<Employees[]>(this.api, { headers: this.header })
      .pipe(
        map(data => {
          const employeeHoursMap = data.reduce((acc, employee) => {
            const hours = (new Date(employee.EndTimeUtc).getTime() - new Date(employee.StarTimeUtc).getTime()) / (1000 * 60 * 60);
            const employeeName = employee.EmployeeName || 'No name';

            if (!acc[employeeName]) {
              acc[employeeName] = 0;
            }
            acc[employeeName] += Math.max(hours, 0); 
            return acc;
          }, {} as { [key: string]: number });

          return Object.keys(employeeHoursMap).map(name => ({
            name: name,
            totalTimeInHours: Math.ceil(employeeHoursMap[name])
          }));
        }),
        catchError(error => {
          console.error('Error fetching data:', error);
          return of([]); 
        })
      )
      .subscribe(groupedData => {
        this.data.next(groupedData);
      });
  }
}
