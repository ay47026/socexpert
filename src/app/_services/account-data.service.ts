import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../_services/api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(
    private http: HttpClient,
    private apiEndPoints: ApiEndpointsService,
  ) { 

  }

  createUser(postBody: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    return this.http.post<any>(this.apiEndPoints.apiURI + this.apiEndPoints.CreateNewUser, postBody, { headers }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }

  PostRecJob(postBody: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    return this.http.post<any>(this.apiEndPoints.apiURI + this.apiEndPoints.PostRecruiterJob, postBody, { headers }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  PostUserJob(postBody: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'false');
    return this.http.post<any>(this.apiEndPoints.apiURI + this.apiEndPoints.PostuserJob, postBody, { headers }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  Login(postBody: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'false');
    return this.http.post<any>(this.apiEndPoints.apiURI + this.apiEndPoints.Login, postBody, { headers }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  ApplyJob(postBody: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'false');
    return this.http.post<any>(this.apiEndPoints.apiURI + this.apiEndPoints.ApplyJob, postBody, { headers }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  JobApplyStatus(UserGuid: any, JobGuid:any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    const params = new HttpParams().set('UserGuid', UserGuid).set('JobGuid',JobGuid);
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetJobApplyStatus, { headers, params }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  JobDetail(Guid: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    const params = new HttpParams().set('JobGuid', Guid);
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetJobDetail, { headers, params }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  RelatedJob(Guid: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    const params = new HttpParams().set('JobGuid', Guid);
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetRelatedJobs, { headers, params }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  GetJobs(Count: number) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    const params = new HttpParams().set('Count', Count);
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetJobs, { headers, params }).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  GetExperience() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetExperience).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  
  GetJobSearchType() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetJobSearchType).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  GetJoiningIn() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetJoiningIn).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
  GetNoticePeriod() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('No-Auth', 'true');
    return this.http.get<any>(this.apiEndPoints.apiURI + this.apiEndPoints.GetNoticePeriod).toPromise().then(res => {
      return res;
    }, error => {
      console.log(error);
      // return error;
    }).catch((val) => {
      console.log(val);
    });
  }
}
