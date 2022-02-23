import { Component, OnInit } from '@angular/core';
import { IMenu } from './banner.interface';
import { BannerService } from './banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  menus: IMenu[] = [];

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getMenuList()
      .subscribe(menu => {
        this.menus = menu;
        // console.log(this.menus)
      });
  }

}
