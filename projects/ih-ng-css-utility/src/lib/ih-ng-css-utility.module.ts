import { NgModule } from '@angular/core';
import { BorderRadiusDirective } from './directives/border-radius.directive';
import { PaddingMarginDirective } from './directives/padding-margin.directive';

const directives = [PaddingMarginDirective, BorderRadiusDirective];

@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class IHCssUtilityModule {}
