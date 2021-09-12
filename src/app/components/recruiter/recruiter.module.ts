import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterComponent } from './recruiter.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    RecruiterComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    SharedModule
  ]
})
export class RecruiterModule { }
