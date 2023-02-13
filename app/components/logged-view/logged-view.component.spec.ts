import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedViewComponent } from './logged-view.component';

describe('LoggedViewComponent', () => {
  let component: LoggedViewComponent;
  let fixture: ComponentFixture<LoggedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
