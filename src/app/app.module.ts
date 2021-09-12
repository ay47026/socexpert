import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


import { TermsConditionsComponent } from './components/common/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/common/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptor } from './_interceptors/token.interceptor';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), 
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxSkeletonLoaderModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost',  'restapi.socexperts.com'],
        disallowedRoutes: ['*']
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
