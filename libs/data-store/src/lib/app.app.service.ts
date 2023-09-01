import { Injectable } from '@angular/core';
import { Department,Departments } from './dept/deptdata';
import { Employee,Employees } from './emp/empdata';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {

  constructor() {
    console.log()
  }

  getDepartments():Observable<Array<Department>> {
    return of(Departments);
  }

  getEmployees():Observable<Array<Employee>>{
    return of(Employees);
  }
  getEmployeesByDeptNo(dno:number):Observable<Array<Employee>>{
    return of(Employees.filter((emp)=>emp.DeptNo === dno));
  }
}
