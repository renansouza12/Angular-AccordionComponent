import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss','faq.responsive.component.scss']
})
export class FaqComponent {
  @Input() faqQuestion!:string;
  @Input() faqCardColor!:string;
  @Input() faqAnswer!:string;

  showFaqAnswer!:boolean;


  icon!:string;
  bold!:string;

  displayFaqAnswer():void{
    this.showFaqAnswer = !this.showFaqAnswer;
    this.icon = this.showFaqAnswer ? 'active' : '';
    this.bold = this.showFaqAnswer ? 'highlight' : '';
  }


} 
