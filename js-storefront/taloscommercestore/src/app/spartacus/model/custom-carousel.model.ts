

import { CmsBannerComponentMedia, CmsComponent } from '@spartacus/core';

export interface TcCarouselContainerModel extends CmsComponent {

  title?: string;
  description?: string;
  bannerCarousel?: TcCarouselModel[]
}

export interface TcCarouselModel extends CmsComponent {

  title?: string;
  description?: string;
  media?: CmsBannerComponentMedia ;
}




