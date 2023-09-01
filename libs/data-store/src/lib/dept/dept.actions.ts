import {createAction, props} from '@ngrx/store';
import { Department } from './deptdata';

export const getDepartments= createAction(
  '[Departments] Get Departments',
);

export const getDepartmentsSuccess= createAction(
  '[Departments] Get Departments Success',
  props<{departments:Array<Department>}>()
);
