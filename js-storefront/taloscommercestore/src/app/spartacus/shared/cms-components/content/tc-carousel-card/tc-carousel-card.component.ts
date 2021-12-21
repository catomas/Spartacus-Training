import { Component, OnInit } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { TcCarouselModel } from '@tc-model';
import { Observable } from 'rxjs';


@Component({
  selector: 'tc-carousel-card',
  templateUrl: './tc-carousel-card.component.html',
  styleUrls: ['./tc-carousel-card.component.scss']
})
export class TcCarouselCardComponent implements OnInit {



  componentData$: Observable<TcCarouselModel> = this.componentData.data$;

  constructor(private componentData: CmsComponentData<TcCarouselModel>) {}

  ngOnInit(): void {

  }

}
