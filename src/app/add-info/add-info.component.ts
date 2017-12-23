import { FormsModule } from '@angular/forms';
import { InfoServiceService } from './../info-service.service';
import { ProductInfo } from './../ProductInfo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {

  id: number;
  groupID: number;
  name: string;
  description: string;
  rate: number;

  constructor(private info: InfoServiceService) { }

  ngOnInit() {
  }

  saveDetails(id: number, groupID: number, name: string, description: string, rate: number) {

    this.id = id;
    this.groupID = groupID;
    this.name = name;
    this.description = description;
    this.rate = rate;

    this.info.postUser(this.id, this.groupID, this.name, this.description, this.rate);
  }

}
