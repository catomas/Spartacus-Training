import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCarouselCardContainerComponent } from './tc-carousel-card-container.component';

describe('TcCarouselCardContainerComponent', () => {
  let component: TcCarouselCardContainerComponent;
  let fixture: ComponentFixture<TcCarouselCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCarouselCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCarouselCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
