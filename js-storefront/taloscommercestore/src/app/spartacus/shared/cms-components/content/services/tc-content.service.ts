import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TcContentService {

  constructor() { }

  backgroundImage(rendered2, viewChild, mediaUrl){
    const asCiewChild = viewChild.nativeElement;
    rendered2.setStyle(asCiewChild, 'background-image', 'url(' + mediaUrl + ')' )
  }
}
