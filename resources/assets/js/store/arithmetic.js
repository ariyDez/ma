export default {
    state: {
        min: null,
        max: null,
        max_value: null,
        speed: null,
        action: null,
        question_deal: null,
        operation_deal: null,
        multiply_numbers: null,
        diff_numbers: null,
        questions: null,
        operation_numbers: null,
        answers: null
    },
    init() {
        this.state.min = parseInt(localStorage.getItem('arithmetic-min'));
        this.state.max = parseInt(localStorage.getItem('arithmetic-max'));
        this.state.max_value = parseInt(localStorage.getItem('arithmetic-max_value'));
        this.state.speed = parseInt(localStorage.getItem('arithmetic-speed'));
        this.state.action = parseInt(localStorage.getItem('arithmetic-action'));
        this.state.question_deal = parseInt(localStorage.getItem('arithmetic-question_deal'));
        this.state.operation_deal = parseInt(localStorage.getItem('arithmetic-operation_deal'));
        this.state.multiply_numbers = JSON.parse(localStorage.getItem('arithmetic-m_numbers'));
        this.state.diff_numbers = JSON.parse(localStorage.getItem('arithmetic-d_numbers'));
        this.state.questions = JSON.parse(localStorage.getItem('arithmetic-questions'));
        this.state.operation_numbers = JSON.parse(localStorage.getItem('arithmetic-operation_numbers'));
        this.state.answers = JSON.parse(localStorage.getItem('arithmetic-answers'));
    },
    set(min, max, max_value, speed, action, question_deal, operation_deal, multiply_numbers, diff_numbers) {
        localStorage.setItem('arithmetic-min', min);
        localStorage.setItem('arithmetic-max', max);
        localStorage.setItem('arithmetic-max_value', max_value);
        localStorage.setItem('arithmetic-speed', speed);
        localStorage.setItem('arithmetic-action', action);
        localStorage.setItem('arithmetic-question_deal', question_deal);
        localStorage.setItem('arithmetic-operation_deal', operation_deal);
        localStorage.setItem('arithmetic-m_numbers', JSON.stringify(multiply_numbers));
        localStorage.setItem('arithmetic-d_numbers', JSON.stringify(diff_numbers));
    },
    setQuestions(questions) {
        localStorage.setItem('arithmetic-questions', JSON.stringify(questions));
    },
    setQuestionOperationNumbers(operation_numbers) {
        localStorage.setItem('arithmetic-operation_numbers', JSON.stringify(operation_numbers));
    },
    setAnswers(answers) {
        localStorage.setItem('arithmetic-answers', JSON.stringify(answers));
    },
    setAudioAnswer(answer) {
        localStorage.setItem('anzan-audio-answer', answer);
    },
    removeReading() {
        localStorage.removeItem('soroban-reading-min');
        localStorage.removeItem('soroban-reading-max');
        localStorage.removeItem('soroban-reading-speed');
    }
}