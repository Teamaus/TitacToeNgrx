import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { boardReducer, XOBoard } from './xoboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({Board:boardReducer}),
   
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
