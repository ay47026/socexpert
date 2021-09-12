import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccountDataService } from 'src/app/_services/account-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count = 0;
  listing: any = [];
  loader = [1, 2, 3, 4, 5, 6, 7];
  isLoading = true;
  constructor(
    private title: Title,
    private accountData: AccountDataService
  ) {

  }

  ngOnInit(): void {
    this.title.setTitle('Home | SOC experts');
    this.getListing(this.count);
  }

  getListing(count: any) {
    this.accountData.GetJobs(count).then((resp: any) => {
      this.listing = this.listing.concat(resp);
      this.count = this.count + 10;
      window.dispatchEvent(new Event('resize'));
      this.isLoading = false;
    });
  }

  @HostListener("window:scroll", ["$event"])
  onBottomScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos == max) {
      //Do your action here
      this.isLoading = true;
      this.getListing(this.count);
    }
  }
  numberOnly(str: string) {
    return str.replace(/\D/g, '');
  }
}
