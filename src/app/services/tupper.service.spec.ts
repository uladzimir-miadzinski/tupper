import { TestBed } from '@angular/core/testing';

import { TupperService } from './tupper.service';

describe('TupperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TupperService = TestBed.get(TupperService);
    expect(service).toBeTruthy();
  });
});
