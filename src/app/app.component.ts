import { Component, OnInit } from '@angular/core';
import { UiManipulationService } from './_services/ui-manipulation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isCollapsed = true;
  copyrightYear: any;
  isLoggedIn: boolean = false;
  firstName: string = '';
  loggedInAs: string = '';
  userRole: string = '';
  constructor(
    private uiService: UiManipulationService
  ) {

  }
  ngOnInit(): void {
    this.copyrightYear = new Date().getFullYear();
    this.onLoad();
  }
  onLoad() {
    this.uiService.isUserLoggedIn.subscribe((resp: any) => this.isLoggedIn = resp);
    this.uiService.userFirstName.subscribe((name: string) => this.firstName = name);
    this.uiService.userRoleType.subscribe((type: string) => {
      this.userRole = type.toString();
    });
  }
}
