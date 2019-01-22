/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EersteService } from './eerste.service';

describe('EersteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EersteService]
    });
  });

  it('should ...', inject([EersteService], (service: EersteService) => {
    expect(service).toBeTruthy();
  }));
});
