import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDataService } from 'src/app/_services/account-data.service';
import { UiManipulationService } from 'src/app/_services/ui-manipulation.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  listingId: any;
  isLoggedIn: any = false;
  detail: any;
  relatedListing: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private uiService: UiManipulationService,
    private accountData: AccountDataService
  ) { }

  ngOnInit(): void {
    this.listingId = this.activatedRoute.snapshot.params.jobid;
    this.uiService.isUserLoggedIn.subscribe((resp: boolean) => {
      this.isLoggedIn = resp;
    });
    this.getDetail(this.listingId);
  }
  getDetail(id: string) {
    this.accountData.JobDetail(id).then((resp: any) => {
      this.detail = resp;
    });
    this.accountData.RelatedJob(id).then((data: any) => {
      this.relatedListing = data;
    });
  }
  
  numberOnly(str: string) {
    return str.replace(/\D/g,'');
  }
}
