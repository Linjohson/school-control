import { TestBed } from '@angular/core/testing';

import { SemestreService } from './semestres.service';

describe('SemestreService', () => {
  let service: SemestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
