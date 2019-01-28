import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoxyComponent } from './roxy.component';

describe('RoxyComponent', () => {
  let component: RoxyComponent;
  let fixture: ComponentFixture<RoxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
