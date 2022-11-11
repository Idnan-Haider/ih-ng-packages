import { NgModule } from '@angular/core';
import { BorderRadiusDirective } from './directives/border-radius.directive';
import { HeightWidthDirective } from './directives/height-width.directive';
import { PaddingMarginDirective } from './directives/padding-margin.directive';

const directives = [
  PaddingMarginDirective,
  BorderRadiusDirective,
  HeightWidthDirective,
];

@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class IHCssUtilityModule {}
