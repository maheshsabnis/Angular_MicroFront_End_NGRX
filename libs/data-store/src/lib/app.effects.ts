import {createEffect,Actions,ofType} from '@ngrx/effects';
import {map, switchMap, withLatestFrom} from  'rxjs/operators';
import {of} from 'rxjs';
import { Injectable } from '@angular/core';

import * as DepartmentActions from './dept/dept.actions';
import * as EmployeeActions from './emp/emp.actions';
import { Store,select } from '@ngrx/store';
import { IAppState } from './app.state';
import { AppService } from './app.app.service';
import { Department } from './dept/deptdata';
import { Employee } from './emp/empdata';
import { selectEmployees } from './app.selector';

@Injectable()
export class AppEffects {

   getDepartments$=createEffect(()=>this._actions$.pipe(
    ofType(DepartmentActions.getDepartments),
    switchMap(()=>this._serv.getDepartments()),
    switchMap((departments:Department[])=>of(DepartmentActions.getDepartmentsSuccess({departments:departments})))
   ))

   getEmployees$=createEffect(()=>this._actions$.pipe(
    ofType(EmployeeActions.getEmployees),
    switchMap(()=>this._serv.getEmployees()),
    switchMap((employees:Employee[])=>of(EmployeeActions.getEmployeesSuccess({employees:employees})))
   ))


   getEmployeesByDeptNo$ = createEffect(() =>  this._actions$.pipe(
    ofType(EmployeeActions.getEmployeesByDeptNo),
    map(action => action), //REading the Inout Parameter
    // execute the selectProductsList selector using 'select' method
    // on the store
    withLatestFrom(this._store.pipe(select(selectEmployees))), // using the seelctor
    switchMap(([id, employees]) => {
       console.log(`employees : ${JSON.stringify(employees)}`);
      const filteredEmployees = employees.filter((emp) => emp.DeptNo === +id);
      console.log(`in effect ${id} ${JSON.stringify(filteredEmployees)}`);
      return of(EmployeeActions.getEmployeesByDeptNoSuccess({employees:filteredEmployees}));
    })
  ));



  constructor(private _store:Store<IAppState>,
    private _actions$:Actions, private _serv:AppService){}
}
