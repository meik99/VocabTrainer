/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VocabService } from './vocab.service';

describe('VocabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocabService]
    });
  });

  it('should ...', inject([VocabService], (service: VocabService) => {
    expect(service).toBeTruthy();
  }));
});
