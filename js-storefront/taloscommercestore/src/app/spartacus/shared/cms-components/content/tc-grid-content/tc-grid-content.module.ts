import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcGridContentComponent } from './tc-grid-content.component';
import { ConfigModule } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { MediaModule, PageComponentModule, PageSlotModule } from '@spartacus/storefront';




@NgModule({
  declarations: [TcGridContentComponent],
  imports:[
    PageSlotModule,
    CommonModule,
    MediaModule,
    PageComponentModule,
    ConfigModule.withConfig({
      cmsComponents: {
        GridSimpleComponent: {
          component: TcGridContentComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcGridContentComponent],
  exports: [TcGridContentComponent],

})
export class TcGridContentModule { }
