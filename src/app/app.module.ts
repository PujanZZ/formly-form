import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { TestComponent } from './test/test.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormlyComponent } from './formly/formly.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatSelectModule } from '@angular/material/select';
import { Formlyv2Component } from './formlyv2/formlyv2.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    BrowserModule,
    MatDividerModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormlyModule,
    FormlyMaterialModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: 'This field is required',
        },
      ],
    }),
  ],
  declarations: [AppComponent, Formlyv2Component],
  exports: [CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
