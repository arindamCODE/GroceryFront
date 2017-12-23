import { ProductGroup } from './../ProductGroup';
import { GroupServiceService } from './../group-service.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  id: number;
  name: string;

  constructor(private group: GroupServiceService) { }

  ngOnInit() {
  }

  saveDetails(id: number, name: string) {

    this.id = id;
    this.name = name;

    this.group.postUser(this.id, this.name);
  }

} 
