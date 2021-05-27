import { Component, OnInit } from '@angular/core';
import { FormInfo } from '../model/form-details';
import { FormControl, AbstractControl, ValidationErrors, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit  {

  // formInfo:FormInfo = new FormInfo();
  public applicationForm: FormGroup;

  constructor( public fb:FormBuilder) {
    
   }

  ngOnInit(): void {

    this.applicationForm = this.fb.group({
      name: new FormControl('', [Validators.required,Validators.maxLength(10)]),
      lastName: new FormControl('', [Validators.required,Validators.maxLength(200)]),
      emailAddress: new FormControl('', [Validators.required,Validators.email,Validators.maxLength(200)]),
      activity: new FormControl('', [Validators.required]),
      comments: new FormControl('',Validators.maxLength(500))
    })
  }

  submitForm() {
 
    if(this.applicationForm.hasError("required"))
    console.log(this.applicationForm.value)
    alert(this.applicationForm.value.name);
  }

  getErrorMessage() {

    

    if (this.applicationForm.controls["name"].errors) {
   
      return 'You must enter a value';
    }
    return "";

    // return this.applicationForm.hasError('email') ? 'Not a valid email' : '';
  }

}
