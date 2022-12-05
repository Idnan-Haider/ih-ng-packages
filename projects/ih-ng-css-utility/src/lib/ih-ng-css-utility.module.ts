import { NgModule } from '@angular/core';
import { BorderRadiusDirective } from './directives/border-radius.directive';
import { FlexDirective } from './directives/flex.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { FontWeightDirective } from './directives/font-weight.directive';
import { HeightWidthDirective } from './directives/height-width.directive';
import { PaddingMarginDirective } from './directives/padding-margin.directive';

const directives = [
  PaddingMarginDirective,
  BorderRadiusDirective,
  HeightWidthDirective,
  FontWeightDirective,
  FontSizeDirective,
  FlexDirective,
];

@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class IHCssUtilityModule {}
