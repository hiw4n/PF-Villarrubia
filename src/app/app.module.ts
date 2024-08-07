import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/* APP MODULES */
import { SharedModule } from './shared/shared.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
//import { StudentsDialogComponent } from './src/app/features/dashboard/students/components/students-dialog/students-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    //StudentsDialogComponent
  ],
  exports: [MaterialModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /* DashboardModule, */
    /* AuthModule, */
    SharedModule,
    MaterialModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    /* Material change style form */
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { apparence: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
