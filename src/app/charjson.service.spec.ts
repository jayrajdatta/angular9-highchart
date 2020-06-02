import { TestBed } from '@angular/core/testing';

import { CharjsonService } from './charjson.service';

describe('CharjsonService', () => {
  let service: CharjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
