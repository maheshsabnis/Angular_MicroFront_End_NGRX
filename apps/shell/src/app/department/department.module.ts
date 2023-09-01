import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'departments',
    component:DepartmentComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [DepartmentComponent]
})
export class DepartmentModule { }
