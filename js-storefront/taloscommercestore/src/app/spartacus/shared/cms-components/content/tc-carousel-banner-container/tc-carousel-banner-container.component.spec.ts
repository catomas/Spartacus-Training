import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCarouselBannerContainerComponent } from './tc-carousel-banner-container.component';

describe('TcCarouselBannerContainerComponent', () => {
  let component: TcCarouselBannerContainerComponent;
  let fixture: ComponentFixture<TcCarouselBannerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCarouselBannerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCarouselBannerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
