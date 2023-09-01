import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from "@ngrx/effects";

import { appReducer } from '@company-org/data-store';
import { AppEffects } from '@company-org/data-store';
import { FormsModule } from '@angular/forms';
const routes:Routes = [
  {
    path:'employees',
    component:EmployeeComponent
  }
]

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('',appReducer),
    EffectsModule.forFeature([AppEffects]),

    // StoreModule.forRoot(),
    // EffectsModule.forRoot()
  ],
  exports:[RouterModule],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
