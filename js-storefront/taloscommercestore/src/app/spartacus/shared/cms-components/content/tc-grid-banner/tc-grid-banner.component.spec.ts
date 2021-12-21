import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcGridBannerComponent } from './tc-grid-banner.component';

describe('TcGridBannerComponent', () => {
  let component: TcGridBannerComponent;
  let fixture: ComponentFixture<TcGridBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcGridBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcGridBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
