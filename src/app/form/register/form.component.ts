import { Component, OnInit } from '@angular/core';
import { IContact } from '../../model/form-details';
import { FormControl, AbstractControl, ValidationErrors, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit  {

  
  public applicationForm: FormGroup;
  contact:IContact;
  submitSucces:boolean=false;
  

  constructor( public fb:FormBuilder,private contactService:ContactService) {
    
   }

  ngOnInit(): void {

    this.applicationForm = this.fb.group({
      name: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      emailAddress: new FormControl('', [Validators.required,Validators.email,Validators.maxLength(200)]),
      activity: new FormControl('', [Validators.required]),
      comments: new FormControl('',Validators.maxLength(500))
    })
  }

  submitForm() {
    
    this.applicationForm.markAllAsTouched();
 
    if(this.applicationForm.valid)
    {
      this.contact = 
      {
        FirstName: this.applicationForm.value.name,
        LastName: this.applicationForm.value.lastName,
        EmailAddress: this.applicationForm.value.emailAddress,
        Activity: this.applicationForm.value.activity,
        Comments: this.applicationForm.value.comments,
        ModifiedDate: ''
      }
    
      this.sendContactInfo();
    }

    else
    {
       //We can send some message
    }
   
  }

  public sendContactInfo():void{
 
    this.submitSucces = false;
      
      this.contactService.sendContactInfo(this.contact)
        .subscribe(results =>
       {
        
          if(results.IsSuccess)
            {
             
             this.submitSucces = true;
             this.resetForm();
            }
            else
            {
             //handle error using results CorrelationId the end user will report ID and support team will check loggs using the Id
            }
       
        }
      );
   
  }

  public populateContact():void{

    this.contact = 
      {
        FirstName: this.applicationForm.value.name,
        LastName: this.applicationForm.value.lastName,
        EmailAddress: this.applicationForm.value.emailAddress,
        Activity: this.applicationForm.value.activity,
        Comments: this.applicationForm.value.comments,
        ModifiedDate: ''
      }
  } 

  public resetForm():void{

    this.applicationForm.reset();
             this.applicationForm.clearValidators();
             this.applicationForm.updateValueAndValidity();
             this.applicationForm.markAllAsTouched();
  }

  public retunrHomePage():void{
    window.open(window.origin+'/home',"_self");
  }
  

}
