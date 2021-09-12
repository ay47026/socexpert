import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountDataService } from 'src/app/_services/account-data.service';
import { UiManipulationService } from 'src/app/_services/ui-manipulation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountData: AccountDataService,
    private toastrService: ToastrService,
    private router: Router,
    private uiService: UiManipulationService
  ) { 
    this.loginForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      Role: ['', Validators.required]
    });
  }
  onFormSubmit(data: any) {
    this.accountData.Login(data).then((resp: any) => {
      switch (resp.StatusCode){
        case 1:
          this.toastrService.success('You\'ve logged in successfully.', 'Welcome' + resp.Firstname, {
            timeOut: 4000
          });
          localStorage.setItem('userGUID', resp.UserGuid);
          localStorage.setItem('firstName', resp.Name);
          localStorage.setItem('role', resp.RoleOk)
          this.uiService.setLoginStatus(true);
          this.uiService.setUserFirstName(resp.Name);
          this.router.navigateByUrl('/home');
        break;
        case 2: 
        this.toastrService.warning('Invalid Email address. Please enter proper email.', '!lert' + resp.Firstname, {
          timeOut: 4000
        });
        break;
        case 3: 

        break;
        case 4:

        break;
      } 
    });
  }
  ngOnInit(): void {
  }

}
