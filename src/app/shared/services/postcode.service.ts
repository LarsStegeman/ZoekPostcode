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
      // Result is status + array of details. We are only interested in the first detail and map it to internal AddressModel interface
      .map((res: any) => res.details[0])
      .map((res: any) => {return new AddressModel(
        res.street,
        res.city,
        res.municipality,
        res.province,
        res.postcode,
        res.pnum,
        res.pchar,
        res.rd_x,
        res.rd_y,
        Number(res.lat),
        Number(res.lon)
      )
      });
    }
}
