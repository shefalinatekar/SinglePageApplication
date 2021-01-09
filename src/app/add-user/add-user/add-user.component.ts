import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {DataService} from ''
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  registerForm = new FormGroup({});
    submitted = false;


  constructor(public data:DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullNm: ['', Validators.required],
      dob: ['', Validators.required],
      lang: ['', Validators.required],
      gender: ['', [Validators.required]],
      about: ['', [Validators.required]],

  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else {
        if(this.data.usrList.length > 11 || this.data.usrList.length == 10){
          this.data.progress = 100
        }else{
          this.data.progress =  this.data.progress +10;
        }
        this.data.usrList.push({
          fullNm: this.registerForm.value.fullNm,
          dob:this.registerForm.value.dob,
          lang: this.registerForm.value.lang,
          gender: this.registerForm.value.gender,
          about: this.registerForm.value.about,
         });

         this.onReset();

      }


  }

  onReset() {
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.submitted = false;
      this.registerForm.reset();
      $('#myModal').hide();
  }

}
