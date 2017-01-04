import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover.component';

@NgModule({
  declarations: [
    PopoverDirective,
    PopoverComponent,
  ],
  exports: [
    PopoverDirective,
    PopoverComponent,
  ],
  entryComponents: [
    PopoverComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class PopoverModule { }
