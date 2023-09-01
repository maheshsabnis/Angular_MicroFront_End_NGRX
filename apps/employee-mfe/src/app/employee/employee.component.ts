import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '@company-org/data-store';
import { EmployeeActions } from '@company-org/data-store';
import { Store,select } from '@ngrx/store';
import { IAppState } from '@company-org/data-store';
import { selectEmployees } from '@company-org/data-store';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:EmployeeData.Employee;
  columns:Array<string>;
   employees$ = this._store.pipe(select(selectEmployees));

  constructor(private _store:Store<IAppState>) {
     this.employee = new EmployeeData.Employee(0,'',0);
     this.columns = new Array<string>();
  }

  ngOnInit() {
     this.columns = Object.keys(this.employee);
     /* Dispatch the Action */
      this._store.dispatch(EmployeeActions.getEmployees());
     console.log('Dispatched Action');
  }

}
