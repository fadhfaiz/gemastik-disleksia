let quiz = {
  images: ['a.png', 'n.png'],
  questions: ['Huruf apa yang kamu lihat diatas ?', 'Huruf apa yang kamu lihat diatas ?'],
  answers: [
    ['A', 'D', 'B', 'C'],
    ['N', 'O', 'Q', 0]
  ],
  correctAnswer: ['A', 'N']
}

class App {

  constructor() {
    this.score = 0;
    this.soal = 0;
  }

  setNomor(value) {
    this.soal = value;
  }

  soalSelanjutnya() {
    this.soal++;
  }

  getNomor() {
    return this.soal;
  }

  setScore(value) {
    this.score += value;
  }

  getScore() {
    return this.score;
  }

  getQuiz() {
    let obj = {
      images: quiz.images[this.soal],
      question: quiz.questions[this.soal],
      answers: quiz.answers[this.soal],
      correctAnswer: quiz.correctAnswer[this.soal]
    }
    return obj;
  }
}