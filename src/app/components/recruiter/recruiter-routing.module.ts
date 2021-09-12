import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostJobComponent } from 'src/app/_shared/post-job/post-job.component';
import { RecruiterComponent } from './recruiter.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: '',
    component: RecruiterComponent,
  },
  {
    path: 'post-job',
    component: PostJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
