import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TcGridContentModel } from '@tc-model';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TcContentService } from '../services/tc-content.service';


@Component({
  selector: 'tc-grid-content',
  templateUrl: './tc-grid-content.component.html',
  styleUrls: ['./tc-grid-content.component.scss']
})
export class TcGridContentComponent implements OnInit, AfterViewInit {
  @ViewChild('asGridItemContainer') gridItemContainer: ElementRef;

  mediaUrl: string;
  port: string = environment.occBaseUrl

  componentData$: Observable<TcGridContentModel> = this.componentData.data$;

  constructor(private componentData: CmsComponentData<TcGridContentModel>, private rendered2: Renderer2, private tcContenService: TcContentService) {}


  ngOnInit(): void {
    this.componentData$.subscribe(val => {
      this.mediaUrl = this.port + val.image.url
    })
  }

  ngAfterViewInit(): void {
    //Add Backround a Components
    this.tcContenService.backgroundImage(this.rendered2,this.gridItemContainer, this.mediaUrl)
  }

}
