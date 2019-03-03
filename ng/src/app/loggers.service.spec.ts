import { TestBed } from '@angular/core/testing';

import { LoggersService } from './loggers.service';

describe('LoggersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggersService = TestBed.get(LoggersService);
    expect(service).toBeTruthy();
  });
});
