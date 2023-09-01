const { shareAll, withModuleFederationPlugin,share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'employee-mfe',

  // exposes: {
  //   './Component': './apps/employee-mfe/src/app/app.component.ts',
  // },

  exposes: {
    './Module': './apps/employee-mfe/src/app/employee/employee.module.ts',
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/effects": {singleton: true, strictVersion: true},
    "@ngrx/router-store": {singleton: true, strictVersion: true},
    "@ngrx/store": {singleton: true, strictVersion: true},
}),
});
