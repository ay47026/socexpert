import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { PostJobComponent } from './post-job/post-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [    
    PostJobComponent,
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PostJobComponent,
    JobDetailComponent
  ]
})
export class SharedModule { }
