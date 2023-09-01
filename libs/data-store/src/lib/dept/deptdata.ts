export class Department {
  [x:string]:any
  constructor(public DeptNo:number,
    public DeptName:string){}
}

export const Departments:Array<Department> = new Array<Department>();
Departments.push(new Department(10,'IT'));
Departments.push(new Department(20,'HRD'));
Departments.push(new Department(30,'SL'));
Departments.push(new Department(40,'AC'));
