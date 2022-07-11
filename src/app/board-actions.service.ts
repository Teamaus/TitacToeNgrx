import { Injectable } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { createAction, createReducer, props,on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { XOBoard } from './xoboard';

@Injectable({
  providedIn: 'root'
})
export class BoardActionsService {
  SETBOARD = createAction("SETBOARD",
                props<{row:number,column:number,xoro:string}>)
  setBoardReducer$ = createReducer(
    {Board:new XOBoard()},
    on(this.SETBOARD,(state,updated)=>this.setBoard(state,updated))
  )  
  constructor() { }
  setBoard(state:{Board:XOBoard},updated:any):{Board:XOBoard}{
      let obj = {...state}
      if (obj.Board.cells)
        obj.Board.cells[updated.row][updated.col] = updated.xoro
      return obj
  }
}
