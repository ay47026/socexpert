import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostJobComponent } from 'src/app/_shared/post-job/post-job.component';
import { JobSeekerComponent } from './job-seeker.component';
import { ProfileComponent } from './profile/profile.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
 
  {
    path: 'post-job',
    component: PostJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
