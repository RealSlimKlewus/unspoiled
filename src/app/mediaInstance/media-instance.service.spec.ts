import { TestBed } from '@angular/core/testing';

import { MediaInstanceService } from './media-instance.service';

describe('MediaInstanceService', () => {
  let service: MediaInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
