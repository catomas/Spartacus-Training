import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcGridBannerComponent } from './tc-grid-banner.component';
import { ConfigModule, I18nModule, provideConfig } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';
import { PageComponentModule } from '@spartacus/storefront';

@NgModule({
  declarations: [TcGridBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    PageComponentModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        TrainingGridBannerComponent: {
          component: TcGridBannerComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcGridBannerComponent],
  exports: [TcGridBannerComponent],

})
export class TcGridBannerModule{}
