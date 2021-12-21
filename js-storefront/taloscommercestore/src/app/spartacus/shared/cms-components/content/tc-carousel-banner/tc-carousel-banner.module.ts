import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCarouselBannerComponent } from './tc-carousel-banner.component';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { ConfigModule, I18nModule} from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';




@NgModule({
  declarations: [TcCarouselBannerComponent],
  imports: [
    CommonModule,
    MediaModule,
    PageComponentModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        TrainingBannerCarousel: {
          component: TcCarouselBannerComponent
        }
      }
    } as CmsConfig)
  ],

  entryComponents: [TcCarouselBannerComponent],
  exports: [TcCarouselBannerComponent],
})
export class TcCarouselBannerModule { }
