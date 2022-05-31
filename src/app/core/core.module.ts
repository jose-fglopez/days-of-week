import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import locale from '@angular/common/locales/en-GB';
import { registerLocaleData } from '@angular/common';
import { DEFAULT_LANGUAGE } from './core.constants';

registerLocaleData(locale);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: locale, useValue: DEFAULT_LANGUAGE },
  ]
})
export class CoreModule { }

/*
DO import modules that should be instantiated once in the app (a.k.a singleton)
DO place services in the module, but do not provide them
DO NOT declare components, pipes or directives, they should be under 'shared' folder
DO NOT import the CoreModule into any modules other than the AppModule
*/