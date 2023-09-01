import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from "@ngrx/effects";

import { appReducer } from '@company-org/data-store';
import { AppEffects } from '@company-org/data-store';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),

    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'The NX NGRX Angular MFE Application',
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
