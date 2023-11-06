import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrameComponent } from './components/frame/frame.component';
import { HeaderComponent } from './components/header/header.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqAnswerComponent } from './components/faq/faq-answer/faq-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    HeaderComponent,
    FaqComponent,
    FaqAnswerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
