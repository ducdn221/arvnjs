import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AguNavbarComponent } from './agu-navbar.component';

describe('AguNavbarComponent', () => {
  let component: AguNavbarComponent;
  let fixture: ComponentFixture<AguNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AguNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AguNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
