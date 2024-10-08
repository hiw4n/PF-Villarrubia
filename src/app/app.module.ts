import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
/* APP MODULES */
import { SharedModule } from './shared/shared.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from './shared/material/material.module';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
/* import { IndexComponent } from './features/dashboard/index/index.component'; */
import { NavModule } from './shared/component/nav/nav.module';
import { FeaturesModule } from './features/features.module';
import { rootReducer } from './core/store';
import { CoreModule } from './core/core.module';
// NGRX
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

//import { StudentsDialogComponent } from './src/app/features/dashboard/students/components/students-dialog/students-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    /* IndexComponent, */
    //StudentsDialogComponent
  ],
  exports: [MaterialModule],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /* DashboardModule, */
    /* AuthModule, */
    SharedModule,
    /* MaterialModule, */
    NavModule,
    FeaturesModule,
    StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // EffectsModule.forRoot([]),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    /*    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]), */
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideHttpClient(withFetch()),
    /* Material change style form */
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { apparence: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
