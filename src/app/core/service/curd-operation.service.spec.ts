import { TestBed } from '@angular/core/testing';

import { CurdOperationService } from './curd-operation.service';

describe('CurdOperationService', () => {
  let service: CurdOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
