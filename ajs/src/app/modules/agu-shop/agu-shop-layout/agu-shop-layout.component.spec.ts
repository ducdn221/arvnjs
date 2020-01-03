import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguShopLayoutComponent } from './agu-shop-layout.component';

describe('AguShopLayoutComponent', () => {
  let component: AguShopLayoutComponent;
  let fixture: ComponentFixture<AguShopLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguShopLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguShopLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
