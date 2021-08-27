import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { RangesComponent } from './ranges/ranges.component';
import { SearchComponent } from './search/search.component';
import { DuplicatesComponent } from './duplicates/duplicates.component';

const routes: Routes = [
  { path: 'index', component: StartComponent },
  { path: 'ranges', component: RangesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'duplicates', component: DuplicatesComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
