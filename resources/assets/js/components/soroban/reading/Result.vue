<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <h3>Вопрос - {{question}}</h3>
                <soroban :value="question"></soroban>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h3>Ответ - {{answer}}</h3>
                <soroban :value="answer"></soroban>
            </div>
        </div>
        <router-link to="/paraphrase/reading">
            <button class="btn">Настройки</button>
        </router-link>
        <router-link :to="{ path: '/soroban/reading/task', query: { isShowed: true } }">
            <button class="btn btn-primary">Далее</button>
        </router-link>
        <button class="btn btn-warning">Завершить</button>
        <div v-if="success">Правильно!</div>
        <div v-else>Неправильно!</div>
    </div>
</template>

<script>
    import Store from '../../../store/soroban'
    export default {
        data() {
            return {
                hands: null,
                answerHands: null,
                answer: null,
                question: null,
                success: null
            }
        },
        created() {
            Store.initReading();
            this.question = Store.state.question;
            this.answer = Store.state.answer;

            if ((this.answer !== 0 && !this.answer) || (this.question !== 0 && !this.question)) {
                this.$router.push('/soroban/reading');
            }
            if (this.question === this.answer) {
                this.success = true;
            } else {
                this.success = false;
            }
        },
        methods: {
        }
    }
</script>