export default {
    state: {
        phraseReading: {
            question_type: null,
            clicking_way: null,
            speed: null,
            question: null,
            question_deal: null,
            answer: null,
            wrong_answer_deal: null,
            right_answer_deal: null
        }
    },
    initPhraseReading() {
        this.state.phraseReading.question_type = parseInt(localStorage.getItem('phrase-question_type'));
        this.state.phraseReading.speed = parseInt(localStorage.getItem('phrase-speed'));
        this.state.phraseReading.question = parseInt(localStorage.getItem('phrase-question'));
        this.state.phraseReading.answer = parseInt(localStorage.getItem('phrase-answer'));
    },
    initCounters() {
        this.state.phraseReading.question_deal = parseInt(localStorage.getItem('phrase-question_deal'));
        this.state.phraseReading.wrong_answer_deal = parseInt(localStorage.getItem('phrase-wrong_answer_deal'));
        this.state.phraseReading.right_answer_deal = parseInt(localStorage.getItem('phrase-right_answer_deal'));
    },
    initClickingCounters() {
        this.state.phraseReading.question_deal = parseInt(localStorage.getItem('phrase-clicking-question_deal'));
        this.state.phraseReading.wrong_answer_deal = parseInt(localStorage.getItem('phrase-clicking-wrong_answer_deal'));
        this.state.phraseReading.right_answer_deal = parseInt(localStorage.getItem('phrase-clicking-right_answer_deal'));
    },
    initPhraseClicking() {
        this.state.phraseReading.question_type = parseInt(localStorage.getItem('phrase-clicking-question_type'));
        this.state.phraseReading.clicking_way = parseInt(localStorage.getItem('phrase-clicking_way'));
        this.state.phraseReading.speed = parseInt(localStorage.getItem('phrase-clicking-speed'));
        this.state.phraseReading.question = parseInt(localStorage.getItem('phrase-clicking-question'));
        this.state.phraseReading.answer = parseInt(localStorage.getItem('phrase-clicking-answer'));
        this.state.phraseReading.question_deal = parseInt(localStorage.getItem('phrase-clicking-question_deal'));
        this.state.phraseReading.wrong_answer_deal = parseInt(localStorage.getItem('phrase-clicking-wrong_answer_deal'));
        this.state.phraseReading.right_answer_deal = parseInt(localStorage.getItem('phrase-clicking-right_answer_deal'));
    },
    setPhraseReading(question_type, speed) {
        localStorage.setItem('phrase-question_type', question_type);
        localStorage.setItem('phrase-speed', speed);
    },
    setPhraseClicking(question_type, clicking_way, speed) {
        localStorage.setItem('phrase-clicking-question_type', question_type);
        localStorage.setItem('phrase-clicking_way', clicking_way);
        localStorage.setItem('phrase-clicking-speed', speed);

    },
    setPhraseReadingQuestion(question) {
        localStorage.setItem('phrase-question', question);
    },
    setPhraseClickingQuestion(question) {
        localStorage.setItem('phrase-clicking-question', question);
    },
    setPhraseReadingAnswer(answer) {
        localStorage.setItem('phrase-answer', answer);
    },
    setPhraseClickingAnswer(answer) {
        localStorage.setItem('phrase-clicking-answer', answer);
    },
    increaseQuestionCounter() {
        if (!localStorage.getItem('phrase-question_deal')) {
            localStorage.setItem('phrase-question_deal', 0);
        }
        let counter = localStorage.getItem('phrase-question_deal');
        counter++;
        localStorage.setItem('phrase-question_deal', counter);
    },
    increaseRightAnswerCounter() {
        if (!localStorage.getItem('phrase-right_answer_deal')) {
            localStorage.setItem('phrase-right_answer_deal', 0);
        }
        let counter = localStorage.getItem('phrase-right_answer_deal');
        counter++;
        localStorage.setItem('phrase-right_answer_deal', counter);
    },
    increaseWrongAnswerCounter() {
        if (!localStorage.getItem('phrase-wrong_answer_deal')) {
            localStorage.setItem('phrase-wrong_answer_deal', 0);
        }
        let counter = localStorage.getItem('phrase-wrong_answer_deal');
        counter++;
        localStorage.setItem('phrase-wrong_answer_deal', counter);
    },
    increaseClickingRightAnswerCounter() {
        if (!localStorage.getItem('phrase-clicking-right_answer_deal')) {
            localStorage.setItem('phrase-clicking-right_answer_deal', 0);
        }
        let counter = localStorage.getItem('phrase-clicking-right_answer_deal');
        counter++;
        localStorage.setItem('phrase-clicking-right_answer_deal', counter);
    },
    increaseClickingWrongAnswerCounter() {
        if (!localStorage.getItem('phrase-clicking-wrong_answer_deal')) {
            localStorage.setItem('phrase-clicking-wrong_answer_deal', 0);
        }
        let counter = localStorage.getItem('phrase-clicking-wrong_answer_deal');
        counter++;
        localStorage.setItem('phrase-clicking-wrong_answer_deal', counter);
    },
    removePhraseReading() {
        localStorage.removeItem('phrase-question_type');
        localStorage.removeItem('phrase-speed');
        localStorage.removeItem('phrase-question');
        localStorage.removeItem('phrase-answer');
    },
    removePhraseClicking() {
        localStorage.removeItem('phrase-clicking-question_type');
        localStorage.removeItem('phrase-clicking_way');
        localStorage.removeItem('phrase-clicking-speed');
        localStorage.removeItem('phrase-clicking-question');
        localStorage.removeItem('phrase-clicking-answer');
    },
    removePhraseClickingAnswer() {
        localStorage.removeItem('phrase-clicking-question');
        localStorage.removeItem('phrase-clicking-answer');
    },
    removePhraseReadingAnswer() {
        localStorage.removeItem('phrase-answer');
    },
    clearCounters() {
        localStorage.setItem('phrase-question_deal', 1);
        localStorage.setItem('phrase-right_answer_deal', 0);
        localStorage.setItem('phrase-wrong_answer_deal', 0);
    },
    clearClickingCounters() {
        localStorage.setItem('phrase-clicking-question_deal', 1);
        localStorage.setItem('phrase-clicking-right_answer_deal', 0);
        localStorage.setItem('phrase-clicking-wrong_answer_deal', 0);
    }
}