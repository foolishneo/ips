import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './containers/registration/registration.component';
import { AccountHolderInfoComponent } from './components/account-holder-info/account-holder-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BankAccountComponent } from './components/bank-account/bank-account.component';
import { CorporateBankAccountComponent } from './components/corporate-bank-account/corporate-bank-account.component';
import { OfficerComponent } from './components/officer/officer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AccountHolderInfoComponent,
    BankAccountComponent,
    CorporateBankAccountComponent,
    OfficerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
