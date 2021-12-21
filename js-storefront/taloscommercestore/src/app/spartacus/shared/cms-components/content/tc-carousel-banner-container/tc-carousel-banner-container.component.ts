import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCarouselContainerModel } from '@tc-model';
import { Observable } from 'rxjs';
import { CmsService } from '@spartacus/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'tc-carousel-banner-container',
  templateUrl: './tc-carousel-banner-container.component.html',
  styleUrls: ['./tc-carousel-banner-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcCarouselBannerContainerComponent implements OnInit {

  bannerData$: Observable<TcCarouselContainerModel> = this.bannerData.data$;


  private items$: Observable<Observable<any>[]> = this.componentData.data$.pipe(
    map((data) => data.bannerCarousel.trim().split(' ')),
    map((codes) => codes.map((code) => this.cmsService.getComponentData(code)))
  );

  constructor(
    private bannerData: CmsComponentData<TcCarouselContainerModel>,
    public componentData: CmsComponentData<any>,
    private cmsService: CmsService
  ) {}

  getItems(): Observable<Observable<any>[]> {
    return this.items$;
  }

  ngOnInit(): void {}

}
