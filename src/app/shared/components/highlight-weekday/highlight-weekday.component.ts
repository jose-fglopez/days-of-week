import { getLocaleDayNames, FormStyle, TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DEFAULT_LANGUAGE, STARTING_DAY } from '@core/core.constants';
import { HighlightBubbleData } from '../highlight-bubbles/highlight-bubble-data';

@Component({
  selector: 'app-highlight-weekday',
  templateUrl: './highlight-weekday.component.html',
  styleUrls: ['./highlight-weekday.component.scss']
})
export class HighlightWeekdayComponent implements OnInit {

  data: HighlightBubbleData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initDaysOfWeek();
  }

  initDaysOfWeek() {

    const date: Date = new Date();

    //Extract weekday names
    const daysOfWeek: string[] = [...getLocaleDayNames(DEFAULT_LANGUAGE, FormStyle.Standalone, TranslationWidth.Wide)];

    //Populate data for the highlights
    let tempData: HighlightBubbleData[] = daysOfWeek.map((el: string, index: number) => {
      return {
        content: el.substring(0, 3),
        highlight: date.getDay() == index
      }
    });

    // Shift as many times as needed depending on starting day of the week
    for (let i = 0; i < STARTING_DAY; i++) {
      tempData.push(tempData.shift()!);
    }

    this.data = [...tempData];

  }



}
