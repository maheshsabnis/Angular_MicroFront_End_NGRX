# Install NX Globally
sudo npm install -g nx

# Create a New Nx Workspace: Choose Angular as the application framework.

npx create-nx-workspace@latest

# Adding App


nx generate @nx/angular:app shell

nx generate @n/angular:app employee-mfe

# Creating Library

nx generate @nx/angular:lib data-store

# Install the Ngrx Dependencies

npm install @ngrx/component-store @ngrx/entity @ngrx/router-store @ngrx/store @ngrx/effects

# install NRWL for Angular (My Not be needed)
npm install @nx/angular


# Adding Module Federation
npm install @angular-architects/module-federation

# For Host
nx g @angular-architects/module-federation:init --project shell --port 4200 --type host

For Shell
nx g @angular-architects/module-federation:init --project customer-mfe --port 4300 --type remote


# Install Bootstrap for the Project and Modify the 'style.css' as follows to use the Bootstrap Styles

@import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

# Add the decl.d.ts file 'src' folder of the Shell Project so that the Module error will be gone


declare module 'employee-mfe/Module'


# The Web Pack Files
Once the Module Federation is added for the employee-mef and the shell project, both projects will be added with webpack.config.js file.

Modify the webpack.config.js file for the 'employee-mfe' porject to expose the EMployee Module and Singleton instances for the NgRx Stores

````javascript
 name: 'employee-mfe',

 

  exposes: {
    './Module': './apps/employee-mfe/src/app/employee/employee.module.ts',
  },

  

  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/effects": {singleton: true, strictVersion: true},
    "@ngrx/router-store": {singleton: true, strictVersion: true},
    "@ngrx/store": {singleton: true, strictVersion: true},
}),
````

# The Store Configuration 
Modify the EmployeeModule to use the StoreModlue and EffectsModule as feature modules.

````javascript
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

````

# Shell Project webbpack.config.js modifications
Modify the webpack.config.js file for the shell project to load the EmployeeModule as MFE app as well as share the NgRx modules as singleton

````javascript
const { shareAll, withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "employee-mfe": "http://localhost:4300/remoteEntry.js",
  },

  
  /* Get the Singletone  */
  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/effects": {singleton: true, strictVersion: true},
    "@ngrx/router-store": {singleton: true, strictVersion: true},
    "@ngrx/store": {singleton: true, strictVersion: true},
}),

});

````

# Route Modification
Modify the app.module.ts file in shell project to lazy-load the EmployeeModule

````javascript
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
  
  }
];

````

# Running the APp

Run the Employee MFE app using the following command, this will run on port 4300
````javascript
nx serve employee-mfe
````

Run the Shellapp using the following command, this wll run on port 4200
````javascript
nx serve shell
````

Navigate to the browser http://localhost:4200

Thats it the App is ready












 


