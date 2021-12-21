import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCarouselBannerComponent } from './tc-carousel-banner.component';

describe('TcCarouselBannerComponent', () => {
  let component: TcCarouselBannerComponent;
  let fixture: ComponentFixture<TcCarouselBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCarouselBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCarouselBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
