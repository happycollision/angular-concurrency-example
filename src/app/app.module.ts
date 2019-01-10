import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefensiveDropComponent } from './components/defensive-drop/defensive-drop.component';
import { NormalAsyncComponent } from './components/normal-async/normal-async.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, DefensiveDropComponent, NormalAsyncComponent, SpinnerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
