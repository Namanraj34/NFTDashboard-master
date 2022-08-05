import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  mainSection = [
    {
      titles: 'lorem ipsum',
      button: 'Publish',
      buttonU: 'UnPublish',
      currentP: 'current price',
      img: 'assets/images/nft-1.png',
      imgETH: 'assets/images/nftimg.svg',
      price: '3.10',
    },
    {
      titles: 'lorem ipsum',
      button: 'Publish',
      buttonU: 'UnPublish',
      currentP: 'current price',
      img: 'assets/images/nft-2.png',
      imgETH: 'assets/images/nftimg.svg',
      price: '6.10',
    },
    {
      titles: 'lorem ipsum',
      button: 'Publish',
      buttonU: 'UnPublish',
      currentP: 'current price',
      img: 'assets/images/nft-3.png',
      imgETH: 'assets/images/nftimg.svg',
      price: '8.10',
    },
    {
      titles: 'lorem ipsum',
      button: 'Publish',
      buttonU: 'UnPublish',
      currentP: 'current price',
      img: 'assets/images/nft-4.png',
      imgETH: 'assets/images/nftimg.svg',
      price: '5.10',
    },
    {
      titles: 'lorem ipsum',
      button: 'Publish',
      buttonU: 'UnPublish',
      currentP: 'current price',
      img: 'assets/images/nft-5.png',
      imgETH: 'assets/images/nftimg.svg',
      price: '7.10',
    },
    {
      titles: 'lorem ipsum',
      button: 'Publish',
      buttonU: 'UnPublish',
      currentP: 'current price',
      img: 'assets/images/nft-6.png',
      imgETH: 'assets/images/nftimg.svg',
      price: '12.10',
    },
  ];

  // toggle = true;
  // status = 'Dark';

  // enableDisableRule(job: any) {
  //   this.toggle = !this.toggle;
  //   this.status = this.toggle ? 'Dark' : 'Light';
  // }
}
