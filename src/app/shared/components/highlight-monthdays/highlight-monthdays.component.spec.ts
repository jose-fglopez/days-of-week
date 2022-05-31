import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMonthdaysComponent } from './highlight-monthdays.component';

describe('HighlightMonthdaysComponent', () => {
  let component: HighlightMonthdaysComponent;
  let fixture: ComponentFixture<HighlightMonthdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightMonthdaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightMonthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
