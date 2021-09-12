import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  apiURI = environment.apiURI;
  //GET 
  GetJobs = 'Jobs/GetJobs';//?Count={Count}	
  //post
  Login='Accounts/Login'
  //POST 
  PostRecruiterJob = 'Jobs/PostRecruiterJob';
  //Post
  PostuserJob='Jobs/PostUserJob';
  //GET 
  GetCities = 'Jobs/GetCities';
  //GET 
  GetExperience = 'Jobs/GetExperience'
  //GET 
  GetJobSearchType = 'Jobs/GetJobSearchType';
  //GET 
  GetJoiningIn = 'Jobs/GetJoiningIn';
  //GET 
  GetNoticePeriod = 'Jobs/GetNoticePeriod';
  //POST 
  CreateNewUser = 'Accounts/CreateNewUser';
  //Post
  ApplyJob='Jobs/ApplyJob';
  //Get
GetJobApplyStatus='jobs/GetJobApplyStatus';
//Get
GetJobDetail='Jobs/GetJobDetail';//?JobGuid
GetRelatedJobs='Jobs/GetRelatedJobs';//JobGuid


  constructor() { }
}
