import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XOBoardComponent } from './xoboard.component';

describe('XOBoardComponent', () => {
  let component: XOBoardComponent;
  let fixture: ComponentFixture<XOBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XOBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XOBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
