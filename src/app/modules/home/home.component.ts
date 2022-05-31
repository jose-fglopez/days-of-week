import { FormStyle, getLocaleDayNames, TranslationWidth, WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DEFAULT_LANGUAGE, STARTING_DAY } from '@core/core.constants';
import { HighlightBubbleData } from 'src/app/shared/components/highlight-bubbles/highlight-bubble-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
