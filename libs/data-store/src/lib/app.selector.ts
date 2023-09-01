import {createSelector} from '@ngrx/store';

import { IDepartmentState } from './dept/dept.state';
import { IEmployeeState } from './emp/emp.state';
import { IAppState } from './app.state';

export const departmentsStore = (state:IAppState)=>state.departmentStore;
export const employeesStore = (state:IAppState)=>state.employeeStore;

/* Create Selctors */
export const selectDepartments = createSelector(
  departmentsStore,
  (state:IDepartmentState)=>state.departments
)
export const selectEmployees = createSelector(
  employeesStore,
  (state:IEmployeeState)=>state.employees
)

export const filterEmployees = createSelector(
  employeesStore,
  (state:IEmployeeState)=>state.filteredEmployees
)

