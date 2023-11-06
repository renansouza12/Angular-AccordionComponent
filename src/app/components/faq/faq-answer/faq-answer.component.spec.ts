import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAnswerComponent } from './faq-answer.component';

describe('FaqAnswerComponent', () => {
  let component: FaqAnswerComponent;
  let fixture: ComponentFixture<FaqAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqAnswerComponent]
    });
    fixture = TestBed.createComponent(FaqAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
