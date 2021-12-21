import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { CmsComponentData } from '@spartacus/storefront';
import { TcGridBannerModel } from 'src/app/spartacus/model/custom-grid.model';
import { CmsService } from '@spartacus/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'tc-grid-banner',
  templateUrl: './tc-grid-banner.component.html',
  styleUrls: ['./tc-grid-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcGridBannerComponent implements OnInit, AfterViewInit {
  @ViewChild('asGridBannerItems') gridBannerItems: ElementRef;

  columns: any;


  bannerComponentData$: Observable<TcGridBannerModel> = this.bannerComponentData.data$;

  components$: Observable<any[]> = this.componentData.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.gridComponent.split(' ').map(component =>
          this.cmsService.getComponentData<any>(component),
        )
      )
    )
  );

  constructor(
    private bannerComponentData: CmsComponentData<TcGridBannerModel>,
    public componentData: CmsComponentData<any>,
    private cmsService: CmsService,
    private rendered2: Renderer2
  ) {}

  numberColumns() {
      const asGridBannerItems = this.gridBannerItems.nativeElement;
      console.log(asGridBannerItems);
      const sizeColumns = 100 / this.columns;
      console.log(sizeColumns);
      this.rendered2.setStyle(asGridBannerItems, 'grid-template-columns', 'repeat(' + this.columns + ',' + sizeColumns + '%)')
  }

  ngOnInit(): void {
    this.bannerComponentData$.subscribe(val => {
      this.columns = val.columns
    })
  }

  ngAfterViewInit(): void {
    this.numberColumns()
  }


}
