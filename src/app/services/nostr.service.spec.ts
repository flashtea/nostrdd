import { TestBed } from '@angular/core/testing';

import { NostrService } from './nostr.service';

describe('NostrService', () => {
  let service: NostrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NostrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
