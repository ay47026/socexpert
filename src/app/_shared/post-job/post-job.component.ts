import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountDataService } from 'src/app/_services/account-data.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

  jobForm: FormGroup;
  experience: any;
  joining: any;
  userId: any;
  constructor(
    private formBuilder: FormBuilder,
    private accountData: AccountDataService,
    private toastrService: ToastrService
  ) {
    this.jobForm = this.formBuilder.group(
      {
        JobTitle: ['', Validators.required],
        CompanyName: ['', Validators.required],
        NumberOfPositions: ['', Validators.required],
        Location: ['', Validators.required],
        JoingType: ['', Validators.required],
        MinExperience: ['', Validators.required],
        MaxExperience: ['', Validators.required],
        MinSalaray: ['', Validators.required],
        MaxSalary: ['', Validators.required],
        JoiningIn: ['', Validators.required],
        SkillsOrTools: ['', Validators.required],
        IsRecruiterDetailsSharable: ['', Validators.required],
        RecruiterEmail: ['', Validators.required],
        RecuruiterMobile: ['', Validators.required],
        LinkToJob: [''],
      }
    )
  }
  
  get f() { 
    return this.jobForm.controls; 
  }

  onFormSubmit(data: any) {
    if (this.userId) {
      data.UserGuid = this.userId;
      this.accountData.PostUserJob(data).then((resp: any) => {
        this.toastrService.success('Your job listing has been posted.', 'Success', {
          timeOut: 6000
        });
      });
    } else {
      this.accountData.PostRecJob(data).then((resp: any) => {
        this.toastrService.success('Your job listing has been posted.', 'Success', {
          timeOut: 6000
        });
      });
    }

  }
  ngOnInit(): void {
    if(localStorage.getItem('userId')) {
      this.userId = localStorage.getItem('userId');
    }
    this.getExperience();
    this.getJoining();
  }
  getExperience() {
    this.accountData.GetExperience().then((resp: any) => {
      this.experience = resp;
    })
  }
  getJoining() {
    this.accountData.GetJoiningIn().then((resp: any) => {
      this.joining = resp;
    })
  }
}
