import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyImageComponent } from './verify-image.component';

describe('VerifyImageComponent', () => {
  let component: VerifyImageComponent;
  let fixture: ComponentFixture<VerifyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
