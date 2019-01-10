import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensiveDestroyComponent } from './defensive-destroy.component';

describe('DefensiveDestroyComponent', () => {
  let component: DefensiveDestroyComponent;
  let fixture: ComponentFixture<DefensiveDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensiveDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensiveDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
