import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../service/getUser.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  ngOnInit(): void {
  }

  startDate: Date
  endDate: Date
  username: string
  inValidForm: boolean
  search() {
    console.log(this.username + ' - ' + typeof (this.startDate) + ' - ' + this.endDate)
  }



  checkForm() {
    this.inValidForm = false;
    if (this.startDate == undefined || this.endDate == undefined || this.username == undefined) {
      this.inValidForm = true;
      return this.inValidForm;
    }
    return this.inValidForm;
  }
}
