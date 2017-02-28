/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchooltypeService } from './schooltype.service';

describe('SchooltypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchooltypeService]
    });
  });

  it('should ...', inject([SchooltypeService], (service: SchooltypeService) => {
    expect(service).toBeTruthy();
  }));
});
