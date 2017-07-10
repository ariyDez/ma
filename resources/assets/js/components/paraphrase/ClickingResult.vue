<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <h3>Вопрос - {{question}}</h3>
                <hands :data="hands" :prop="200"></hands>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h3>Ответ - {{answer}}</h3>
                <hands :data="answerHands" :prop="200"></hands>
            </div>
        </div>
        <router-link to="/paraphrase/clicking">
            <button class="btn">Настройки</button>
        </router-link>
        <router-link :to="{ path: '/paraphrase/clicking/task', query: { isShowed: true } }">
            <button class="btn btn-primary">Далее</button>
        </router-link>
        <button class="btn btn-warning">Завершить</button>
        <transition name="fade" mode="out-in" appear>
            <result :question_deal="question_deal" :right="right_answer_deal" :wrong="wrong_answer_deal" v-show="question_deal"></result>
        </transition>
    </div>
</template>

<script>
    import Store from '../../store/config'
    import Hands from '../../helpers/hands'
    export default {
        data() {
            return {
                hands: null,
                answerHands: null,
                answer: null,
                question: null,
                success: null,
                question_deal: { value: 0},
                right_answer_deal: null,
                wrong_answer_deal: null
            }
        },
        created() {
            Store.initPhraseClicking();
            this.question = Store.state.phraseReading.question;
            this.answer = Store.state.phraseReading.answer;
            if (this.question === this.answer) {
                Store.increaseClickingRightAnswerCounter();
            } else {
                Store.increaseClickingWrongAnswerCounter();
            }
            if ((this.answer !== 0 && !this.answer) || (this.question !== 0 && !this.question)) {
                this.$router.push('/paraphrase/clicking');
            }
            this.calculate();
            Store.initClickingCounters();
            this.init();
            Store.removePhraseClickingAnswer();
        },
        methods: {
            init() {
                this.question_deal.value = Store.state.phraseReading.question_deal;
                this.right_answer_deal = { value: Store.state.phraseReading.right_answer_deal };
                this.wrong_answer_deal = { value: Store.state.phraseReading.wrong_answer_deal };
            },
            calculate() {
                this.hands = Hands.calculate(this.question);
                this.answerHands = Hands.calculate(this.answer);
            }
        }
    }
</script>