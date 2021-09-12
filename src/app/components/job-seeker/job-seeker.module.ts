import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { JobSeekerComponent } from './job-seeker.component';
import { ProfileComponent } from './profile/profile.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    JobSeekerComponent,
    ProfileComponent,
    AppliedJobsComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    SharedModule
  ]
})
export class JobSeekerModule { }
