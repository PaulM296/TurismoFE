import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{

  questions = [
    { question: 'Întrebarea 1: Care este tara de origine?', answer: 'Paris' },
    { question: 'Întrebarea 2: Scopul concediului sau al vacantei?', answer: 'Mount Everest' },
    { question: 'Întrebarea 3: Care este perioada șederii?', answer: 'Mount Everest' },
    { question: 'Întrebarea 4: Ce fel de climat sau vreme preferați pentru destinația dumneavoastră?', answer: 'Mount Everest' },
    { question: 'Întrebarea 5: Doriți să experimentați culturi sau mancăruri noi?', answer: 'Mount Everest' },
    { question: 'Întrebarea 6: Doriți să călătoriți cu un grup sau singur?', answer: 'Mount Everest' },
    { question: 'Întrebarea 7: Ati dori să aveți și activități care induc adrenalina?', answer: 'Mount Everest' },
    { question: 'Întrebarea 8: Cate obiective turistice ati dori să vizitați?', answer: 'Mount Everest' },
    { question: 'Întrebarea 9: Doriți să vă cazați într-un hotel sau să închiriați o locuintă?', answer: 'Mount Everest' },
    { question: 'Întrebarea 10: Care este intervalul de incadrare al bugetului de vacanță?', answer: 'Mount Everest' },
    // add more questions here
  ];
  currentQuestionIndex = 0;
  currentQuestion!: string;
  answer!: string;
  errorMessage!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex].question;
  }

  submitAnswer() {
    if (this.answer === this.questions[this.currentQuestionIndex].answer) {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex === this.questions.length) {
        this.router.navigateByUrl('/results');
      } else {
        this.currentQuestion = this.questions[this.currentQuestionIndex].question;
        this.answer = '';
        this.errorMessage = '';
      }
    } else {
      this.errorMessage = 'Incorrect answer, please try again.';
    }
  }
}
