import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCarouselBannerContainerComponent } from './tc-carousel-banner-container.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { CarouselModule } from '@spartacus/storefront';




@NgModule({
  declarations: [TcCarouselBannerContainerComponent],
  imports: [
    CarouselModule,
    CommonModule,
    MediaModule,
    PageComponentModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        TrainingBannerCarouselContainer: {
          component: TcCarouselBannerContainerComponent
        }
      }
    } as CmsConfig)
  ],
  entryComponents: [TcCarouselBannerContainerComponent],
  exports: [TcCarouselBannerContainerComponent],
})
export class TcCarouselBannerContainerModule { }
