import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { HttpClient } from '@angular/common/http';

import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-nft',
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.css'],
})
export class CreateNftComponent implements OnInit {
  ngOnInit(): void {}

  // Add Price Start

  list: any[] = [];

  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
  }

  removeTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  // Add Price end

  file: any;

  getFile(event: any) {
    this.file = event.target.files[0];

    console.log('file', this.file);
  }

  users: any = [];

  constructor(private userData: SellerService, private http: HttpClient) {
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
