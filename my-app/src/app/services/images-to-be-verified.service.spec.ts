import { TestBed } from '@angular/core/testing';

import { ImagesToBeVerifiedService } from './images-to-be-verified.service';

describe('ImagesToBeVerifiedService', () => {
  let service: ImagesToBeVerifiedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesToBeVerifiedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
