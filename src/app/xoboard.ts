import { createAction, createReducer, props,on, USER_PROVIDED_META_REDUCERS } from "@ngrx/store"



export class Cell{
    constructor(public row:number,
                public col:number,
                public xoro:string)
    {}
}
export class XOBoard {
    cells?:Array<Array<number>>
    constructor(public size:number){
        this.cells = new Array(size)
        this.cells.fill(new Array(size).fill(0))
        console.log(this.cells)
    }
}
export const SETBOARDACTION = createAction("SETBOARDACTION",props<Cell>())
export const INITBOARDACTION = createAction("INITBOARD",props<{size:number}>())
export const boardReducer = createReducer(
    new XOBoard(3),
    on(INITBOARDACTION,(state:XOBoard,updatedValue:any)=>new XOBoard(updatedValue.size)),
    on(SETBOARDACTION,setBoard)
      
    
  )
  function setBoard(state:XOBoard,cell:any):XOBoard{
    let update:Cell = cell
    let obj = {...state}
    if (obj.cells){
        let cells =obj.cells.map(v=>v)
        cells[update.row] = obj.cells[update.row].map(v=>v)
        
        cells[update.row][update.col] = update.xoro=="X"?1:-1
       
        obj.cells = cells.map(v=>v)
        
    }
    
    console.log(obj)
    
    return obj
}

  