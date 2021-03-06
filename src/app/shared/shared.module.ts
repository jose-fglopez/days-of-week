import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightBubblesComponent } from './components/highlight-bubbles/highlight-bubbles.component';
import { HighlightWeekdayComponent } from './components/highlight-weekday/highlight-weekday.component';
import { HighlightMonthdaysComponent } from './components/highlight-monthdays/highlight-monthdays.component';


@NgModule({
  declarations: [
    HighlightBubblesComponent,
    HighlightWeekdayComponent,
    HighlightMonthdaysComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightBubblesComponent,
    HighlightWeekdayComponent,
    HighlightMonthdaysComponent
  ],
  providers: []
})
export class SharedModule { }

/*
DO declare components, pipes, directives, etc, and export them
DO import FormsModule, ReactiveFormsModule and other modules needed in the nested components
DO import the SharedModule into any other Feature module under the 'modules' folder
DO NOT provide singleton services. These ones must be on CoreModule under the 'core' folder
DO NOT import the SharedModule into the AppModule
*/