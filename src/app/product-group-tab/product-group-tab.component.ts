import { ProductGroup } from './../ProductGroup';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-product-group-tab',
  templateUrl: './product-group-tab.component.html',
  styleUrls: ['./product-group-tab.component.css']
})
export class ProductGroupTabComponent implements OnInit {

  public object: ProductGroup[];

  url: string = 'http://localhost:5000/api/group';

  constructor(private http: Http) {
    http.get(this.url).subscribe(result => {
      this.object = result.json() as ProductGroup[];
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}