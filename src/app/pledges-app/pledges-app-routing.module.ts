import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPledgeComponent } from './add-pledge/add-pledge.component';
import { PledgesListComponent } from './pledges-list/pledges-list.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [


  {
    path:"",
    redirectTo:"add",
    pathMatch:"full"
  },
  {
    path:"add",
    component:AddPledgeComponent
  },
  {
    path:"donate",
    component:DonateComponent
  },


{
  path:"list",
  component:PledgesListComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PledgesAppRoutingModule { }
