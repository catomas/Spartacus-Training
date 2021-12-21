/*
 * Export Customs CMS Component
 */
import { CmsBannerComponentMedia, CmsComponent, CmsResponsiveBannerComponentMedia } from '@spartacus/core';

export interface TcGridBannerModel extends CmsComponent {
  columns?: string;
  gridComponent?: TcGridContentModel[];
}

export interface TcGridContentModel extends CmsComponent {
  title?: string;
  description?: string;
  image?: CmsBannerComponentMedia ;
  position?: number;
}
