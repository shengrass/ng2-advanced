import { TestBed, async, inject } from '@angular/core/testing';

import { EnsureInputGuard } from './ensure-input.guard';

describe('EnsureInputGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureInputGuard]
    });
  });

  it('should ...', inject([EnsureInputGuard], (guard: EnsureInputGuard) => {
    expect(guard).toBeTruthy();
  }));
});
