import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorQrCodeComponent } from './leitor-qr-code.component';

describe('LeitorQrCodeComponent', () => {
  let component: LeitorQrCodeComponent;
  let fixture: ComponentFixture<LeitorQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
