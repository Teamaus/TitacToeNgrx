import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createAction, createReducer, on, props } from '@ngrx/store';
export const INITBOARD = createAction("INITBOARD",props<{size:number,cells:Array<Array<number>>}>())

export const boardReducer = createReducer(
  {size:3,cells:[[0,0,0],[0,0,0],[0,0,0]]},
  on(INITBOARD,(state,updatedValue)=>{
    let retval = {...state}
    retval.size = updatedValue.size
    retval.cells = new Array(updatedValue.size).fill(0)
                  .map(e=>new Array(updatedValue.size).fill(0))
    return retval
  })
)
@Injectable({
  providedIn: 'root'
})
export class BoardReducerService {
  
  constructor() {

   }
}
