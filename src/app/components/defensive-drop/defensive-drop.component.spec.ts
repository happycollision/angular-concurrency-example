import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensiveDropComponent } from './defensive-drop.component';

describe('DefensiveDropComponent', () => {
  let component: DefensiveDropComponent;
  let fixture: ComponentFixture<DefensiveDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensiveDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensiveDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
