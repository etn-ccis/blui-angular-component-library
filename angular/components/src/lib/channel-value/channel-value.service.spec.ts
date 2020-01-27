import { TestBed } from '@angular/core/testing';

import { ChannelValueService } from './channel-value.service';

describe('ChannelValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChannelValueService = TestBed.get(ChannelValueService);
    expect(service).toBeTruthy();
  });
});
