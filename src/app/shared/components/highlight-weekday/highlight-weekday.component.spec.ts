import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightWeekdayComponent } from './highlight-weekday.component';

describe('HighlightWeekdayComponent', () => {
  let component: HighlightWeekdayComponent;
  let fixture: ComponentFixture<HighlightWeekdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightWeekdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightWeekdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
