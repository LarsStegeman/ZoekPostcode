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

  postcodeResult: AddressModel;
  errorMessage: string;
  showMap: boolean;

  getAddress(postcode: string, houseNumber: string){
      this.errorMessage = null;
      this.showMap=false;
      console.log('Button Clicked:' + postcode + ' ' + houseNumber );
      this.postcodeService.getAddress(postcode,houseNumber).subscribe(
          (res) => {
              if(res instanceof AddressModel){
                this.postcodeResult = res;
              }else{
                this.postcodeResult = null;
                this.errorMessage = res;
            }
          });
  }

  initMap(){
    this.showMap = !this.showMap;
  }

  clear(postcode, houseNumber){
      postcode.value = '';
      houseNumber.value ='';
      this.postcodeResult = null;
      this.showMap = false;
      this.errorMessage = null;
  }

}
