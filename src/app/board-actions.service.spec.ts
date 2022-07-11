import { TestBed } from '@angular/core/testing';

import { BoardActionsService } from './board-actions.service';

describe('BoardActionsService', () => {
  let service: BoardActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
