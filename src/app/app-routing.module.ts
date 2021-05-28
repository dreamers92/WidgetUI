import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/register/form.component';
import { ViewRegistrationsComponent } from './form/view-registrations/view-registrations.component';

const routes: Routes = [

  { path: '', component: ViewRegistrationsComponent },
  { path: 'view', component: ViewRegistrationsComponent },
  { path: 'register', component: FormComponent },
  { path: 'home', component: ViewRegistrationsComponent },
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
