import { Route } from '@angular/router';
import { HomeComponent } from './component/app.home.component';
import {loadRemoteModule} from '@angular-architects/module-federation';
export const appRoutes: Route[] = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'departmentslist',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
  },
  {
    path:'employeeslist',
    loadChildren:()=>import('employee-mfe/Module').then(m=>m.EmployeeModule)
  //   loadChildren: () =>  loadRemoteModule({
  //   //  type: 'manifest',
  //     remoteName: 'employee-mfe',
  //     exposedModule: './Module'
  // }).then(m => m.EmployeeModule)
  }
];
