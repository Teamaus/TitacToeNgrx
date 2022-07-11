import { TestBed } from '@angular/core/testing';

import { BoardReducerService } from './board-reducer.service';

describe('BoardReducerService', () => {
  let service: BoardReducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardReducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
