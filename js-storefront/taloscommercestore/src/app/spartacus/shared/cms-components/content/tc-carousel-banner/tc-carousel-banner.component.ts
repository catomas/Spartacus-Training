import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { environment } from '@tc-env';
import { TcCarouselModel } from '@tc-model';
import { Observable } from 'rxjs';
import { TcContentService } from '../services/tc-content.service';


@Component({
  selector: 'tc-carousel-banner',
  templateUrl: './tc-carousel-banner.component.html',
  styleUrls: ['./tc-carousel-banner.component.scss']
})
export class TcCarouselBannerComponent implements OnInit {
  @ViewChild('asItemBanner') itemBanner: ElementRef

  mediaUrl: string;
  port: string = environment.occBaseUrl

  componentData$: Observable<TcCarouselModel> = this.componentData.data$;

  constructor(private componentData: CmsComponentData<TcCarouselModel>, private rendered2: Renderer2, private tcContenService: TcContentService) {}

  ngOnInit(): void {
    this.componentData$.subscribe(val => {
      this.mediaUrl = this.port + val.media.url
    })
  }

  ngAfterViewInit(): void {
    //Add Backround a Components
    this.tcContenService.backgroundImage(this.rendered2,this.itemBanner, this.mediaUrl)
  }

}
