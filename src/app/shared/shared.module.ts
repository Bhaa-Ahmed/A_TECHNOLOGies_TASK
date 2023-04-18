import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent, FilterComponent],
  imports: [CommonModule],
  exports: [CardComponent, HeaderComponent, FilterComponent],
})
export class SharedModule {}
