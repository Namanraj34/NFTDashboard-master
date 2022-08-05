import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-house',
      router: '/dashboard',
    },
    {
      number: '2',
      name: 'MarketPlace',
      icon: 'fa-solid fa-store',
      router: '/create-nft',
    },
    {
      number: '3',
      name: 'My NFTs',
      icon: 'fa-solid fa-briefcase',
    },
    {
      number: '4',
      name: 'Wallet',
      icon: 'fa-solid fa-wallet',
    },
    {
      number: '5',
      name: 'Favourites',
      icon: 'fa-solid fa-heart',
    },
    {
      number: '6',
      name: 'History',
      icon: 'fa-solid fa-clock-rotate-left',
    },
    {
      number: '7',
      name: 'settings',
      icon: 'fa-solid fa-gear',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
