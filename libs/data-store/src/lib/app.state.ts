import { IDepartmentState } from "./dept/dept.state";
import { IEmployeeState } from "./emp/emp.state";


/* Defining the Store */

export interface IAppState {
  departmentStore:IDepartmentState,
  employeeStore:IEmployeeState
}

