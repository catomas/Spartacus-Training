import { NgModule } from '@angular/core';
import {
  exercisesTranslationChunksConfig,

  TcCarouselBannerContainerModule,
  TcCarouselBannerModule,
  TcCarouselCardContainerModule,
  TcCarouselCardModule,
  TcFormEmailModule,
  TcGridBannerModule,
  TcGridContentModule,
  TcSplitViewBannerModule,
} from '@tc-shared';
import { provideConfig } from '@spartacus/core';
import { CarouselModule } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [
    TcCarouselBannerContainerModule,
    TcCarouselBannerModule,
    TcGridBannerModule,
    TcGridContentModule,
    TcSplitViewBannerModule,
    TcCarouselCardContainerModule,
    TcCarouselCardModule,
    TcFormEmailModule,

    //Carousel
    CarouselModule,
  ],
  providers: [
    provideConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: exercisesTranslationChunksConfig,

      },
    }),
  ],
})
export class ContentModule {}
