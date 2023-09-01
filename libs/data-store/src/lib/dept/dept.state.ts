import { Department } from "./deptdata";

export interface IDepartmentState {
   departments:Department[]
}

export const initialDepartmentsState: IDepartmentState  ={
  departments:[]
}

