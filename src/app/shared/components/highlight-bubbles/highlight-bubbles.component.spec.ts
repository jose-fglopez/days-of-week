import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBubblesComponent } from './highlight-bubbles.component';

describe('HighlightBubblesComponent', () => {
  let component: HighlightBubblesComponent;
  let fixture: ComponentFixture<HighlightBubblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightBubblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
