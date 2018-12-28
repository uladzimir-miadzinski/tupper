import { TestBed } from '@angular/core/testing';

import { TapperService } from './tapper.service';

describe('TapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TapperService = TestBed.get(TapperService);
    expect(service).toBeTruthy();
  });
});
