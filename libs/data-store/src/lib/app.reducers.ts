/* Creating Reducer */

import {ActionReducerMap, createReducer,on} from '@ngrx/store';

import * as DepartmentActions from './dept/dept.actions';
import * as EmployeeActions from './emp/emp.actions';

import { initialDepartmentsState } from './dept/dept.state';
import { initialEmployeesState } from './emp/emp.state';
import { IAppState } from './app.state';
 /* Currently this is not used */
// const combineInitialState = {
//   initialDepartmentsState,
//   initialEmployeesState
// }

const departmentsReducer = createReducer(
  initialDepartmentsState,
  on(DepartmentActions.getDepartmentsSuccess,(state,{departments})=>({
    ...state,
    departments
  }))
);

const employeesReducer = createReducer(
  initialEmployeesState,
  on(EmployeeActions.getEmployeesSuccess,(state,{employees})=>({
     ...state,
     employees
  })),
  on(EmployeeActions.getEmployeesByDeptNoSuccess,(state,{employees})=>({
    ...state,
    filteredEmployees:employees
 }))
);

/* combine both reducers */

export const appReducer:ActionReducerMap<IAppState,any> = {
  departmentStore:departmentsReducer,
  employeeStore:employeesReducer
};

