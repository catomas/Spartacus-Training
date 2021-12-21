import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCarouselCardComponent } from './tc-carousel-card.component';

describe('TcCarouselCardComponent', () => {
  let component: TcCarouselCardComponent;
  let fixture: ComponentFixture<TcCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcCarouselCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
