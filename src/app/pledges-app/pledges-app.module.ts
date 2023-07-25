import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PledgesAppRoutingModule } from './pledges-app-routing.module';
import { AddPledgeComponent } from './add-pledge/add-pledge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PledgesListComponent } from './pledges-list/pledges-list.component';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [
    AddPledgeComponent,
    PledgesListComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PledgesAppRoutingModule
  ]
})
export class PledgesAppModule { }
