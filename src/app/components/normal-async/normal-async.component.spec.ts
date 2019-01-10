import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalAsyncComponent } from './normal-async.component';

describe('NormalAsyncComponent', () => {
  let component: NormalAsyncComponent;
  let fixture: ComponentFixture<NormalAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
