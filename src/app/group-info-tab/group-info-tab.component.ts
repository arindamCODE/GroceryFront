import { ProductInfo } from './../ProductInfo';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-group-info-tab',
  templateUrl: './group-info-tab.component.html',
  styleUrls: ['./group-info-tab.component.css']
})
export class GroupInfoTabComponent implements OnInit { 

  public object: ProductInfo[];

  url: string = 'http://localhost:5000/api/info';

  constructor(private http: Http) { 
    http.get(this.url).subscribe(result => {
      this.object = result.json() as ProductInfo[];
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
