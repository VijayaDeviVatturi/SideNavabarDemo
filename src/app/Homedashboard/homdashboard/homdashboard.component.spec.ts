import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomdashboardComponent } from './homdashboard.component';

describe('HomdashboardComponent', () => {
  let component: HomdashboardComponent;
  let fixture: ComponentFixture<HomdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
