import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/common/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/common/terms-conditions/terms-conditions.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JobDetailComponent } from './_shared/job-detail/job-detail.component';
import { ProfileComponent } from './components/job-seeker/profile/profile.component';
import { EditProfileComponent } from './components/job-seeker/edit-profile/edit-profile.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'detail/:jobid/:title',
    component: JobDetailComponent
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  { 
    path: 'recruiter', 
    loadChildren: () => import('./components/recruiter/recruiter.module').then(m => m.RecruiterModule) 
  },
  { 
    path: 'job-seeker',
    loadChildren: () => import('./components/job-seeker/job-seeker.module').then(m => m.JobSeekerModule)
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
