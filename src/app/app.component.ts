import { state } from '@angular/animations';
import { getLocalePluralCase } from '@angular/common';
import { Component, Sanitizer } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { INITBOARDACTION, SETBOARDACTION, XOBoard } from './xoboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToeRedux';
  board$?:Observable<any>
  
  

  constructor(private store:Store<{Board:XOBoard}>)
  {
        this.board$ = store.select(state=>state.Board)
  
  
  }
  ngOnInit(){
   
    this.board$?.subscribe(e=>console.log(e))
    this.store.dispatch(INITBOARDACTION({size:3}))
  }
  makeMove(row:number,col:number){
    console.log(row,col)
    this.store.dispatch(SETBOARDACTION({row:row,col:col,xoro:"X"}))
    
  }

}
