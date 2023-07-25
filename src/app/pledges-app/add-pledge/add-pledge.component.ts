import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-add-pledge',
  templateUrl: './add-pledge.component.html',
  styleUrls: ['./add-pledge.component.scss'],
})
export class AddPledgeComponent implements OnInit {

  pledgeForm = new FormGroup({
    PledgeType:new FormControl(''),
    ApplicantName: new FormControl(''),
    PhoneNumber: new FormControl(''),
    PledgeAmount: new FormControl(''),
    Currency: new FormControl(''),
    Email: new FormControl(''),
  });

  constructor() {}
  ngOnInit(): void {}

  submitForm(): void{
    console.log(this.pledgeForm.value)
  }


}
