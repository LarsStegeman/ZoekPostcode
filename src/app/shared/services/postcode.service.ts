import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';



import { AddressModel } from '../models/address.model'

@Injectable()
export class PostcodeService {

  constructor(private http: HttpClient) {}

  url: string = `http://api.postcodedata.nl/v1/postcode/?`;

  getAddress(postcode: string, nummer: string): Observable<AddressModel>{
    return this.http.get(this.url + `postcode=${postcode}&streetnumber=${nummer}&ref=domeinnaam.nl&type=json`)
      // Result is status + array of details. We are only interested in the first detail and map it to internal AddressModel
      //.map((res: any) => console.log(res))
      .map((res: any) => {
        if(res.status != 'ok'){return res.errormessage
        }
        return new AddressModel(
          res.details[0].street,
          res.details[0].city,
          res.details[0].municipality,
          res.details[0].province,
          res.details[0].postcode,
          res.details[0].pnum,
          res.details[0].pchar,
          res.details[0].rd_x,
          res.details[0].rd_y,
          Number(res.details[0].lat),
          Number(res.details[0].lon)
      )
      });
    }
}
