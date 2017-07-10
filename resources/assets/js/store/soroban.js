export default {
    state: {
        speed: null,
        min: null,
        max: null,
        question: null,
        answer: null
    },
    initReading() {
        this.state.min = parseInt(localStorage.getItem('soroban-reading-min'));
        this.state.max = parseInt(localStorage.getItem('soroban-reading-max'));
        this.state.speed = parseInt(localStorage.getItem('soroban-reading-speed'));
        this.state.question = parseInt(localStorage.getItem('soroban-reading-question'));
        this.state.answer = parseInt(localStorage.getItem('soroban-reading-answer'));
    },
    initWriting() {
        this.state.min = parseInt(localStorage.getItem('soroban-writing-min'));
        this.state.max = parseInt(localStorage.getItem('soroban-writing-max'));
        this.state.speed = parseInt(localStorage.getItem('soroban-writing-speed'));
        this.state.question = parseInt(localStorage.getItem('soroban-writing-question'));
        this.state.answer = parseInt(localStorage.getItem('soroban-writing-answer'));
    },
    setReading(min, max, speed) {
        localStorage.setItem('soroban-reading-min', min);
        localStorage.setItem('soroban-reading-max', max);
        localStorage.setItem('soroban-reading-speed', speed);
    },
    setWriting(min, max, speed) {
        localStorage.setItem('soroban-writing-min', min);
        localStorage.setItem('soroban-writing-max', max);
        localStorage.setItem('soroban-writing-speed', speed);
    },
    setReadingQuestion(question) {
        localStorage.setItem('soroban-reading-question', question);
    },
    setReadingAnswer(answer) {
        localStorage.setItem('soroban-reading-answer', answer);
    },
    setWritingQuestion(question) {
        localStorage.setItem('soroban-writing-question', question);
    },
    setWritingAnswer(answer) {
        localStorage.setItem('soroban-writing-answer', answer);
    },
    removeReading() {
        localStorage.removeItem('soroban-reading-min');
        localStorage.removeItem('soroban-reading-max');
        localStorage.removeItem('soroban-reading-speed');
    }
}