import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgesListComponent } from './pledges-list.component';

describe('PledgesListComponent', () => {
  let component: PledgesListComponent;
  let fixture: ComponentFixture<PledgesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PledgesListComponent]
    });
    fixture = TestBed.createComponent(PledgesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
