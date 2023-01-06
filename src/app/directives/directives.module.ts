import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nbaScrollDirective } from './scroll.directive';
import { AboutDirective } from './about.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    nbaScrollDirective,
    AboutDirective
  ],
  exports: [
    nbaScrollDirective,
    AboutDirective
  ]
})
export class DirectivesModule { }