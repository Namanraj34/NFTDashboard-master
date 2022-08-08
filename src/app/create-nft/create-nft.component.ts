import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-nft',
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.css'],
})
export class CreateNftComponent implements OnInit {
  ngOnInit(): void {}

  fileName: any;
  hashID: any;
  discpt: any;
  attRib: any;

  mintNFt() {
    if (
      this.fileName == '' ||
      (this.fileName == null && this.hashID == '') ||
      (this.hashID == null && this.discpt == '') ||
      (this.discpt == null && this.attRib == '') ||
      this.attRib == null
    ) {
      alert('Enter Name');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You did not fill the all field!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      this.router.navigateByUrl('/seller-item');
    }
  }

  file: any;

  getFile(event: any) {
    this.file = event.target.files[0];

    console.log('file', this.file);
  }

  users: any = [];

  constructor(
    private userData: SellerService,
    private http: HttpClient,
    private router: Router
  ) {
    userData.users().subscribe((data) => {
      console.warn('data', data);
      // this.users = data;
      this.users.push(data);
    });
  }
  getUserFormData(data: any) {
    console.log(data);
    this.userData.saveUsers(data).subscribe((result) => {
      console.log(result);
    });
  }
}
