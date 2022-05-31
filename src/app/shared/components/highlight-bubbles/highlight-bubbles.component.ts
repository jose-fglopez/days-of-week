import { Component, Input, OnInit } from '@angular/core';
import { HighlightBubbleData } from './highlight-bubble-data';

@Component({
  selector: 'app-highlight-bubbles',
  templateUrl: './highlight-bubbles.component.html',
  styleUrls: ['./highlight-bubbles.component.scss']
})

export class HighlightBubblesComponent implements OnInit {

  @Input() data: HighlightBubbleData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
