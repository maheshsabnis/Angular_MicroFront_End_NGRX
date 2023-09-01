import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { IAppState } from '@company-org/data-store';
import * as DepartmentSelectors from '@company-org/data-store';
import {DepartmentActions} from '@company-org/data-store';
import { DepartmentData } from '@company-org/data-store';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department:DepartmentData.Department;
  columns:Array<string>;
  departments$ = this._store.pipe(select(DepartmentSelectors.selectDepartments));
  /* Injet the Store */
  constructor(
    private _store:Store<IAppState>
  ) {
    this.department = new DepartmentData.Department(0,'');
    this.columns = new Array<string>();
  }

  ngOnInit() {
    this.columns = Object.keys(this.department);
    console.log('Dispatch an action');
    this._store.dispatch(DepartmentActions.getDepartments());
  }

}
