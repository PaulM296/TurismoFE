import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../assets/Turismo.json';
import { HttpClient } from '@angular/common/http';

interface Destination {
  taraOrigine: string;
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

  locationData: any = data;
  questions = [
    { question: 'Întrebarea 1: Care este tara de origine?', answer: this.locationData.locatii[0].taraOrigine },
    { question: 'Întrebarea 2: Scopul concediului sau al vacantei?', answer: this.locationData.locatii[0].scop },
    { question: 'Întrebarea 3: Care este perioada șederii?', answer: this.locationData.locatii[0].perioada.toString() },
    { question: 'Întrebarea 4: Ce fel de climat sau vreme preferați pentru destinația dumneavoastră?', answer: this.locationData.locatii[0].climat },
    { question: 'Întrebarea 5: Doriți să experimentați culturi sau mancăruri noi?', answer: this.locationData.locatii[0].zona },
    { question: 'Întrebarea 6: Doriți să călătoriți cu un grup sau singur?', answer: this.locationData.locatii[0].nrPersoane },
    { question: 'Întrebarea 7: Ati dori să aveți și activități care induc adrenalina?', answer: this.locationData.locatii[0].activitati },
    { question: 'Întrebarea 8: Cate obiective turistice ati dori să vizitați?', answer: this.locationData.locatii[0].obiectiveTuristice.toString() },
    { question: 'Întrebarea 9: Doriți să vă cazați într-un hotel sau să închiriați o locuintă?', answer: this.locationData.locatii[0].cazare },
    { question: 'Întrebarea 10: Care este intervalul de incadrare al bugetului de vacanță?', answer: this.locationData.locatii[0].buget.toString() }
  ];
  currentQuestionIndex = 0;
  currentQuestion!: string;
  answer!: string;
  errorMessage!: string;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<LocationData>('assets/Turismo.json').subscribe(
      data => {
        this.locationData = data;
        this.questions[0].answer = this.locationData.locatii[0].taraOrigine;
        this.questions[1].answer = this.locationData.locatii[0].scop;
        this.questions[2].answer = this.locationData.locatii[0].perioada.toString();
        this.questions[3].answer = this.locationData.locatii[0].climat;
        this.questions[4].answer = this.locationData.locatii[0].zona;
        this.questions[5].answer = this.locationData.locatii[0].nrPersoane;
        this.questions[6].answer = this.locationData.locatii[0].activitati;
        this.questions[7].answer = this.locationData.locatii[0].activitati;
        this.questions[8].answer = this.locationData.locatii[0].activitati;
        this.questions[9].answer = this.locationData.locatii[0].activitati;
      }
    );
  }

  submitAnswer() {
    if (this.answer.toLowerCase() === this.questions[this.currentQuestionIndex].answer.toLowerCase()) {
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
