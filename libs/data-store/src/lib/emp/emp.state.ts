import { Employee } from "./empdata"

export interface IEmployeeState {
   employees:Employee[],
   filteredEmployees:Employee[]
}

export const initialEmployeesState: IEmployeeState  ={
  employees:[],
  filteredEmployees:[]
}

