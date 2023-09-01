const { shareAll, withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "employee-mfe": "http://localhost:4300/remoteEntry.js",
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },
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
