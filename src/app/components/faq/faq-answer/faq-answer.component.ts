import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-faq-answer',
  templateUrl: './faq-answer.component.html',
  styleUrls: ['./faq-answer.component.scss']
})
export class FaqAnswerComponent {
    @Input() faqAnswer!:string | any;
}
