import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, InfoFormComponent, LoginFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
