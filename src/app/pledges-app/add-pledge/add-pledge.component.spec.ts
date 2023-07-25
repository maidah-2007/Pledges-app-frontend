import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPledgeComponent } from './add-pledge.component';

describe('AddPledgeComponent', () => {
  let component: AddPledgeComponent;
  let fixture: ComponentFixture<AddPledgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPledgeComponent]
    });
    fixture = TestBed.createComponent(AddPledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
