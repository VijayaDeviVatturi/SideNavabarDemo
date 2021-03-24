import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardscreenComponent } from './dashboardscreen.component';

describe('DashboardscreenComponent', () => {
  let component: DashboardscreenComponent;
  let fixture: ComponentFixture<DashboardscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
