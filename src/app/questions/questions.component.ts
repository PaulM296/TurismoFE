import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../assets/Turismo.json';
import { HttpClient } from '@angular/common/http';

interface Destination {
  scop: string;
  perioada: number;
  climat: string;
  zona: string;
  nrPersoane: string;
  activitati: string;
  obiectiveTuristice: number;
  cazare: string;
  buget: number;
  numeDestinatie: string;
}

interface LocationData {
  locatii: Destination[];
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions = [
    { question: 'Întrebarea 1: Scopul concediului sau al vacanței?', answer: ['odihna', 'vizitat'] },
    { question: 'Întrebarea 2: Care este perioada șederii?', answer: ['1', '3', '6', '2', '4', '5', '16', '10', '7', '20'] },
    { question: 'Întrebarea 3: Ce fel de climat sau vreme preferați pentru destinația dumneavoastră?', answer: ['mediteranean', 'temperat', 'rece'] },
    { question: 'Întrebarea 4: Preferați o zona urbană sau o zona rurală?', answer: ['urban', 'rural'] },
    { question: 'Întrebarea 5: Doriți să călătoriți cu un grup sau singur?', answer: ['singur', 'grup'] },
    { question: 'Întrebarea 6: Ati dori să aveți și activități care induc adrenalină?', answer: ['adrenalina', 'non-adrenalina'] },
    { question: 'Întrebarea 7: Cate obiective turistice ati dori să vizitați?', answer: ['3', '5', '1', '13', '6', '2', '12', '9', '8'] },
    { question: 'Întrebarea 8: Doriți să vă cazați într-un hotel sau să închiriați o locuință?', answer: ['hotel', 'locuinta'] },
    { question: 'Întrebarea 9: Care este bugetul de vacanță?', answer: ['776', '4935', '3568', '1782', '636', '586', '2580', '2340', '1406', '1905', '3971', '1512', '1231', '4036', '2650', '3393', '5436', '906', '1540', '1160', '4195', '558', '2515', '1021', '1800', '840', '11595', '3144', '607', '437'] }
  ];
  currentQuestionIndex = 0;
  currentQuestion!: string;
  answer!: string;
  errorMessage!: string
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {

  }

  submitAnswer() {
    const correctAnswers = this.questions[this.currentQuestionIndex].answer;
    if (correctAnswers.includes(this.answer.toLowerCase())) {
      // Correct answer, move to next question
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex === this.questions.length) {
        this.router.navigateByUrl('/results');
      } else {
        this.currentQuestion = this.questions[this.currentQuestionIndex].question;
        this.answer = '';
        this.errorMessage = '';
      }
    } else {
      // Incorrect answer, show error message
      this.errorMessage = 'Incorrect answer, please try again.';
    }
  }

}
