import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-pledges-list',
  templateUrl: './pledges-list.component.html',
  styleUrls: ['./pledges-list.component.scss']
})


export class PledgesListComponent {


pledgeTelForm:FormGroup;

constructor(){
 this.pledgeTelForm= new FormGroup({
  telPhone: new  FormControl('')
})

}

submit(){
  console.log(this.pledgeTelForm.value)
}



  donations=[
    {user: 'Maida', Number: '070098989',cause:'hi', Amount: '100000'},
    {user: 'Linda', Number: '070098989',cause:'hi', Amount: '100000'},
    {user: 'Joy', Number: '070098989',cause:'hi', Amount: '100000'}]

}
