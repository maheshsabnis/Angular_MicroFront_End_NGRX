import {createAction, props} from '@ngrx/store';
import { Employee } from './empdata';

export const getEmployees= createAction(
  '[Employees] Get Employees',
);

export const getEmployeesSuccess= createAction(
  '[Employees] Get Employees Success',
  props<{employees:Array<Employee>}>()
);


export const getEmployeesByDeptNo= createAction(
  '[Employees] Get Employees By DeptNo',
  props<{deptno:number}>()
);

export const getEmployeesByDeptNoSuccess= createAction(
  '[Employees] Get Employee by DeptNo Success',
  props<{employees:Array<Employee>}>()
);
