import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasePanelComponent } from './base-panel/base-panel.component';
import { StartComponent } from './start/start.component';
import { RangesComponent } from './ranges/ranges.component';
import { DuplicatesComponent } from './duplicates/duplicates.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BasePanelComponent,
    StartComponent,
    RangesComponent,
    DuplicatesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
