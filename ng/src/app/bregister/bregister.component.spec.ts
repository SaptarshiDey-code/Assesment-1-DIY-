import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BRegisterComponent } from './bregister.component';

describe('BRegisterComponent', () => {
  let component: BRegisterComponent;
  let fixture: ComponentFixture<BRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
