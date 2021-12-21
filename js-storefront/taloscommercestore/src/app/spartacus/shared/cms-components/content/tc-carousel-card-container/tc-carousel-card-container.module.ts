import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcCarouselCardContainerComponent } from './tc-carousel-card-container.component';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { MediaModule, PageComponentModule } from '@spartacus/storefront';
import { CarouselModule } from '@spartacus/storefront';



@NgModule({
  declarations: [TcCarouselCardContainerComponent],
  imports: [
    CarouselModule,
    CommonModule,
    MediaModule,
    PageComponentModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        TrainingCardCarouselContainer: {
          component: TcCarouselCardContainerComponent
        }
      }
    } as CmsConfig)
  ],

  entryComponents: [TcCarouselCardContainerComponent],
  exports: [TcCarouselCardContainerComponent],
})
export class TcCarouselCardContainerModule { }
