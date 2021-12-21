import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCarouselCardComponent } from './tc-carousel-card.component';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';



@NgModule({
  declarations: [TcCarouselCardComponent],
  imports: [
    CommonModule,
    MediaModule,
    PageComponentModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        TrainingCardCarousel: {
          component: TcCarouselCardComponent
        }
      }
    } as CmsConfig)
  ],

  entryComponents: [TcCarouselCardComponent],
  exports: [TcCarouselCardComponent],
})
export class TcCarouselCardModule { }
