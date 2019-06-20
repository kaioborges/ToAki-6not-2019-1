import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocComponent } from './geo-loc.component';

describe('GeoLocComponent', () => {
  let component: GeoLocComponent;
  let fixture: ComponentFixture<GeoLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
