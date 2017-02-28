/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchoollevelService } from './schoollevel.service';

describe('SchoollevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoollevelService]
    });
  });

  it('should ...', inject([SchoollevelService], (service: SchoollevelService) => {
    expect(service).toBeTruthy();
  }));
});
