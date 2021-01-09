import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
// import {DataService} from ''
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  usrList:any = [];
  //  usrList = [{
  //   fullNm: "Ibrahim",
  //   dob:"1-09-2019",
  //   lang: "English",
  //   gender: "Male",
  //   about: "Good Talent",
  //  },
  //  {
  //   fullNm: "Ram",
  //   dob:"1-09-2019",
  //   lang: "German",
  //   gender: "Male",
  //   about: "Hard Working",
  //  },
  //  {
  //   fullNm: "Supriya",
  //   dob:"1-09-2019",
  //   lang: "Japanese",
  //   gender: "Male",
  //   about: "Polite",
  //  }];

   rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    }
  ]


  constructor(public data:DataService) { }

  ngOnInit(): void {
    this.usrList = this.data.usrList;
  }

}
