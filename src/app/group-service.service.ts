import { AddGroupComponent } from './add-group/add-group.component';
import { ProductGroup } from './ProductGroup';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GroupServiceService {

  constructor(private http: Http) { }

  private url: string = 'http://localhost:5000/api/group';

  object: ProductGroup;

  postUser(id: number, name: string) {
  
    this.object = new ProductGroup(id, name);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url, this.object, options).map(response => response.json())
      .subscribe(
      () => { console.log('Success') }
      );
  }  

}
