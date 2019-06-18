import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { LoadingCardComponent } from './components/loading-card/loading-card.component';
import { BitcoinCardComponent } from './components/bitcoin-card/bitcoin-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingCardComponent,
    BitcoinCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
