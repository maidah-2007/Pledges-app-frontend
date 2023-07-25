import { Component } from '@angular/core';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // imports:[NgbDropdownModule]
})
export class AppComponent {
  title = 'pledges';
	collapsed = true;
}
