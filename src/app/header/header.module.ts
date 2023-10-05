import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search/search-bar/search-bar.component';
import { SearchModule } from '../search/search.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,SearchModule
  ]
})
export class HeaderModule { }
