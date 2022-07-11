import { state } from '@angular/animations';
import { Component } from '@angular/core';
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
  cells$?:Observable<any>
  cells$View?:Observable<any>
  

  constructor(private store:Store<{Board:XOBoard}>)
  {
        let cells$ = store.select(state=>state.Board.cells)
       

  }
  ngOnInit(){
   
    this.cells$?.subscribe(e=>console.log(e))
    this.store.dispatch(INITBOARDACTION({size:3}))
  }
  makeMove(row:number,col:number){
    console.log(row,col)
    this.store.dispatch(SETBOARDACTION({row:row,col:col,xoro:"X"}))
    
  }

}
