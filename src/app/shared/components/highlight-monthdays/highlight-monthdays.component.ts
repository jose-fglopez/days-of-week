import { Component, OnInit } from '@angular/core';
import { HighlightBubbleData } from '../highlight-bubbles/highlight-bubble-data';

@Component({
  selector: 'app-highlight-monthdays',
  templateUrl: './highlight-monthdays.component.html',
  styleUrls: ['./highlight-monthdays.component.scss']
})
export class HighlightMonthdaysComponent implements OnInit {

  data: HighlightBubbleData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initDaysOfMonth();
  }

  initDaysOfMonth() {

    const date: Date = new Date();

    //Extract days of current month
    const daysOfMonth: number = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    //Extract array of days of current month
    const daysArray: number[] = Array.from({ length: daysOfMonth }, (v, k) => k + 1)

    //Populate data for the highlights
    let tempData: HighlightBubbleData[] = daysArray.map((el: number, index: number) => {
      return {
        content: el.toString(),
        highlight: date.getDate() == index + 1
      }
    });

    this.data = [...tempData];

  }

}
