import { TestBed } from '@angular/core/testing';

import { AuthorsApiService } from './authors-api.service';

describe('AuthorsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorsApiService = TestBed.get(AuthorsApiService);
    expect(service).toBeTruthy();
  });
});
