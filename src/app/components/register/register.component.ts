import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmValidator } from 'src/app/_helpers/confirm-validator';
import { AccountDataService } from 'src/app/_services/account-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  experience: any;
  userId: any;
  noticeperiod: any;
  constructor(
    private formBuilder: FormBuilder,
    private accountData: AccountDataService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        MobileNumber: ['', Validators.required],
        Email: ['', Validators.required],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Batch: ['', Validators.required],
        Experience: ['', Validators.required],
        SkillsOrTools: ['', Validators.required],
        Certification: ['', Validators.required],
        CurrentCompany: ['', Validators.required],
        CurrentJobTitle: ['', Validators.required],
        CurrentCTC: ['', Validators.required],
        CurrentJobLocation: ['', Validators.required],
        NoticePeriod: ['', Validators.required],
        ExpectedCTC: ['', Validators.required],
        Password: ['', Validators.required],
        ConfirmPassword: ['', Validators.required],
        Gender: ['', Validators.required],
        LinkedInURL: ['', [Validators.required, Validators.pattern(/(http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g)]],
        agreeTerms: ['', Validators.required]
      }, {
      validator: ConfirmValidator('Password', 'ConfirmPassword')
    }

    )
  }
  get f() {
    return this.registerForm.controls;
  }
  onFormSubmit(data: any) {
    this.accountData.createUser(data).then((resp: any) => {
      if (+resp === 0) {
        this.toastrService.warning('You have already an account with us for the entered email. Please go to login page.', 'Alert', {
          timeOut: 6000
        });
      } else {
        this.toastrService.success('Thank you for Registerign with us', 'Success', {
          timeOut: 6000
        });
        localStorage.setItem('firstName', data.Firstname);
        localStorage.setItem('userGUID', resp);
        this.router.navigateByUrl('/job-seeker');
      }

    });
  }
  ngOnInit(): void {
    if(localStorage.getItem('userGUID')) {
     // this.router.navigateByUrl('/home')
    }
    this.getExperience();
    this.getNoticeperiod();
  }
  getExperience() {
    this.accountData.GetExperience().then((resp: any) => {
      this.experience = resp;
    })
  }
  getNoticeperiod() {
    this.accountData.GetNoticePeriod().then((resp: any) => {
      this.noticeperiod = resp;
    })
  }
}
