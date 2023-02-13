import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAndEduComponent } from './exp-and-edu.component';

describe('ExpAndEduComponent', () => {
  let component: ExpAndEduComponent;
  let fixture: ComponentFixture<ExpAndEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAndEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpAndEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
