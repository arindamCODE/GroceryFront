import { ProductInfo } from './ProductInfo';
import { AddInfoComponent } from './add-info/add-info.component';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InfoServiceService {

  constructor(private http: Http) { }

  private url: string = 'http://localhost:5000/api/info';

  object: ProductInfo;

  postUser(id: number,groupID: number, name: string, description: string, rate: number) {

    this.object = new ProductInfo(id, groupID, name, description, rate);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, this.object, options).map(response => response.json())
      .subscribe(
      () => { console.log('Success') }
      );
  }
}
