import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcGridContentComponent } from './tc-grid-content.component';

describe('TcGridContentComponent', () => {
  let component: TcGridContentComponent;
  let fixture: ComponentFixture<TcGridContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcGridContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcGridContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
