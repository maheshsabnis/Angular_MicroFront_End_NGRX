export class Employee {
  constructor(
    public EmpNo:number,
    public EmpName:string,
    public DeptNo:number
  ){}
}


export const Employees:Array<Employee> = new Array<Employee>();

Employees.push(new Employee(101, 'Mahesh',10));
Employees.push(new Employee(102, 'Tejas',20));
Employees.push(new Employee(103, 'Vikram',30));
Employees.push(new Employee(104, 'Suprotim',40));
Employees.push(new Employee(105, 'Subodh',10));
Employees.push(new Employee(106, 'Manish',20));
Employees.push(new Employee(107, 'Abhijeet',30));
Employees.push(new Employee(107, 'Sachin',40));
