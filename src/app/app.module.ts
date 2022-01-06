import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    StocksListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
