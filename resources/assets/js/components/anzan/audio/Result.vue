<template>
    <div>
        <div class="row" v-if="!answered">
            <h3>Введите ваш ответ:</h3>
            <input type="text" v-model="answer">
            <button class="btn btn-primary" @click="clickAnswer">Ответить</button>
        </div>
        <div class="row" v-if="answered">
            <div class="col-md-4">
                <h3>Верный ответ</h3>
                {{question}}
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h3>Введенный ответ</h3>
                <div>{{answer}}</div>
            </div>
        </div>
        <router-link to="/anzan/audio">
            <button class="btn">Настройки</button>
        </router-link>
        <router-link :to="{ path: '/anzan/audio/task', query: { isShowed: true } }">
            <button class="btn btn-primary">Далее</button>
        </router-link>
        <button class="btn btn-warning" @click="finish">Завершить</button>
        <!--<transition name="fade" mode="out-in" appear>-->
            <!--<result :question_deal="question_deal" :right="right_answer_deal" :wrong="wrong_answer_deal" v-show="question_deal"></result>-->
        <!--</transition>-->
    </div>
</template>

<script>
    import Store from '../../../store/anzan'
    export default {
        data() {
            return {
                hands: null,
                answerHands: null,
                answer: 0,
                question: null,
                success: null,
                answered: false,
            }
        },
        created() {
            Store.initAudio();
            this.init();
            this.question = Store.state.question;
            this.answer = Store.state.answer || 0;
            if (this.question === this.answer) {
                Store.increaseRightAnswerCounter();
            } else {
                Store.increaseWrongAnswerCounter();
            }

            Store.removeAnswer();

        },
        methods: {
            init() {
                this.question = Store.state.question;
            },
            clickAnswer() {
                Store.setAudioAnswer(this.answer);
                this.answered = true;
            },
            finish() {

            }
        }
    }
</script>