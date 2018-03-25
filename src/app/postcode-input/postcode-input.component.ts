import { Component, OnInit } from '@angular/core';

import { PostcodeService } from '../shared/services/postcode.service';

import { AddressModel } from '../shared/models/address.model';

@Component({
  selector: 'app-postcode-input',
  templateUrl: './postcode-input.component.html',
  styleUrls: ['./postcode-input.component.css']
})
export class PostcodeInputComponent implements OnInit {

  constructor(private postcodeService: PostcodeService) { }

  ngOnInit() {
  }

  postcodeResult: any;

  getAddress(postcode: string, houseNumber: string){
      console.log('Button Clicked:' + postcode + ' ' + houseNumber );
      this.postcodeService.getAddress(postcode,houseNumber).subscribe(res => console.log(res.city));
  }

}
