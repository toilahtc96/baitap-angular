import { Component, OnInit } from '@angular/core';
import { MoneyFormatPipe } from '../money-format-pipe.component';

import { GetUserService } from '../service/getUser.service';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
  
})
export class TableDataComponent implements OnInit {

  arrPerson
  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
    this.getUserService.getUser().then(res => { this.arrPerson = res });

    console.log(this.arrPerson);

  }
}
