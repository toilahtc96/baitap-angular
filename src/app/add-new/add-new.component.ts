import { Component, OnInit } from '@angular/core';
import { AddNewUser } from '../service/addNewUser.service';
import {} from '../service/getUser.service';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(private addUser: AddNewUser) { }

  ngOnInit(): void {
  }
  onSubmit(value) {
    console.log(value);
    value.id = 24;
    value.profile_image = '';
    console.log(value)
    this.addUser.addUser(value);

  }
}
