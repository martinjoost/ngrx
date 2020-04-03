import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SonComponent } from './components/son/son.component';
import { NietoComponent } from './components/nieto/nieto.component';
import { StoreModule } from '@ngrx/store';
import { countReducer } from './components/count.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SonComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count:countReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }