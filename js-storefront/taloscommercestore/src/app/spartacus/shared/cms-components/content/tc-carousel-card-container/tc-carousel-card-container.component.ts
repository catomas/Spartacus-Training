import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCarouselContainerModel } from '@tc-model';
import { Observable } from 'rxjs';
import { CmsService } from '@spartacus/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tc-carousel-card-container',
  templateUrl: './tc-carousel-card-container.component.html',
  styleUrls: ['./tc-carousel-card-container.component.scss']
})
export class TcCarouselCardContainerComponent implements OnInit {

  bannerData$: Observable<TcCarouselContainerModel> = this.bannerData.data$;


  private items$: Observable<Observable<any>[]> = this.componentData.data$.pipe(
    map((data) => data.cardCarousel.trim().split(' ')),
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
