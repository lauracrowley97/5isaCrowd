import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTourComponent } from './art-tour.component';

describe('ArtTourComponent', () => {
  let component: ArtTourComponent;
  let fixture: ComponentFixture<ArtTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
