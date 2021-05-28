import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from '../../model/form-details';

@Component({
  selector: 'app-view-registrations',
  templateUrl: './view-registrations.component.html',
  styleUrls: ['./view-registrations.component.sass']
})
export class ViewRegistrationsComponent implements OnInit {

  contacts:IContact[]=[];

  constructor( private contactService:ContactService) {
  }

  ngOnInit(): void {
    this.viewContacts();
  }

  public viewContacts():void{
      this.contactService.viewContacts()
        .subscribe(results =>
       {
          if(results.IsSuccess)
            {
              this.contacts = results.DataList;
            }
            else
            {
             //handle error using results CorrelationId the end user will report ID and support team will check loggs using the Id
            }
        }
      );
   
  }

  public redirectToRegistration():void{
    window.open(window.origin+'/register',"_self");
  }


}
