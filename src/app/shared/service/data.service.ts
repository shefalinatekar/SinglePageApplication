import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  progress:number = 9;
  usrList = [{
    fullNm: "Ibrahim",
    dob:"1-09-2019",
    lang: "English",
    gender: "Male",
    about: "Good Talent",
   },
   {
    fullNm: "Ram",
    dob:"1-09-2019",
    lang: "German",
    gender: "Male",
    about: "Hard Working",
   },
   {
    fullNm: "Supriya",
    dob:"1-09-2019",
    lang: "Japanese",
    gender: "Male",
    about: "Polite",
   }];
  constructor() { }
}
