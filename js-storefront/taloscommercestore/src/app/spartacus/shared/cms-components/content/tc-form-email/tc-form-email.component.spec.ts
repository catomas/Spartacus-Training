import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcFormEmailComponent } from './tc-form-email.component';

describe('TcFormEmailComponent', () => {
  let component: TcFormEmailComponent;
  let fixture: ComponentFixture<TcFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcFormEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
