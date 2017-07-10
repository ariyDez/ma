export default {
    state: {
        speed: null,
        min: null,
        max: null,
        action: null,
        operation_deal: null,
        multiply_numbers: null,
        diff_numbers: null,
        question: null,
        answer: null
    },
    initFlash() {
        this.state.min = parseInt(localStorage.getItem('anzan-flash-min'));
        this.state.max = parseInt(localStorage.getItem('anzan-flash-max'));
        this.state.speed = parseInt(localStorage.getItem('anzan-flash-speed'));
        this.state.action = parseInt(localStorage.getItem('anzan-flash-action'));
        this.state.operation_deal = parseInt(localStorage.getItem('anzan-flash-operation_deal'));
        this.state.multiply_numbers = JSON.parse(localStorage.getItem('anzan-flash-m_numbers'));
        this.state.diff_numbers = JSON.parse(localStorage.getItem('anzan-flash-d_numbers'));
        this.state.question = parseInt(localStorage.getItem('anzan-flash-question'));
        this.state.answer = parseInt(localStorage.getItem('anzan-flash-answer'));
    },
    initAudio() {
        this.state.min = parseInt(localStorage.getItem('anzan-audio-min'));
        this.state.max = parseInt(localStorage.getItem('anzan-audio-max'));
        this.state.speed = parseInt(localStorage.getItem('anzan-audio-speed'));
        this.state.action = parseInt(localStorage.getItem('anzan-audio-action'));
        this.state.operation_deal = parseInt(localStorage.getItem('anzan-audio-operation_deal'));
        this.state.multiply_numbers = JSON.parse(localStorage.getItem('anzan-audio-m_numbers'));
        this.state.diff_numbers = JSON.parse(localStorage.getItem('anzan-audio-d_numbers'));
        this.state.question = parseInt(localStorage.getItem('anzan-audio-question'));
        this.state.answer = parseInt(localStorage.getItem('anzan-audio-answer'));
    },
    setFlash(min, max, speed, action, operation_deal, multiply_numbers, diff_numbers) {
        localStorage.setItem('anzan-flash-min', min);
        localStorage.setItem('anzan-flash-max', max);
        localStorage.setItem('anzan-flash-speed', speed);
        localStorage.setItem('anzan-flash-action', action);
        localStorage.setItem('anzan-flash-operation_deal', operation_deal);
        localStorage.setItem('anzan-flash-m_numbers', JSON.stringify(multiply_numbers));
        localStorage.setItem('anzan-flash-d_numbers', JSON.stringify(diff_numbers));
    },
    setAudio(min, max, speed, action, operation_deal, multiply_numbers, diff_numbers) {
        localStorage.setItem('anzan-audio-min', min);
        localStorage.setItem('anzan-audio-max', max);
        localStorage.setItem('anzan-audio-speed', speed);
        localStorage.setItem('anzan-audio-action', action);
        localStorage.setItem('anzan-audio-operation_deal', operation_deal);
        localStorage.setItem('anzan-audio-m_numbers', JSON.stringify(multiply_numbers));
        localStorage.setItem('anzan-audio-d_numbers', JSON.stringify(diff_numbers));
    },
    setFlashQuestion(question) {
        localStorage.setItem('anzan-flash-question', question);
    },
    setAudioQuestion(question) {
        localStorage.setItem('anzan-audio-question', question);
    },
    setFlashAnswer(answer) {
        localStorage.setItem('anzan-flash-answer', answer);
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