<template>
    <div>
        <div class="phrase-reading__description" v-if="!isStarted">
            <div class="panel panel-default">
                <div class="panel-heading">Описание</div>
                <div class="panel-body">
                    В этом приложении вам необходимо прочитать и ввести в поле ответа значение, обозначенное
                    на пальцах. Если в "Настройках" вы выбирали время выполнения вопроса 0, то данный вопрос
                    будет оставаться на экране до того, пока вы не нажмете "Ок". Если вы ввели другое время,
                    отличное от 0, то вопрос будет оставаться на экране ровно столько, насколько вы указали,
                    по истечению этого времени вопрос исчезнет с экрана. Для ввода ответа время не ограничено.
                    Если вы готовы, нажмите кнопку "Далее" для начала упражнения.
                </div>
            </div>
            <button class="btn">
                <router-link to="/paraphrase/reading">Настройки</router-link>
            </button>
            <button class="btn btn-primary" @click="next">Далее</button>
        </div>
        <div class="phrase-reading__task" v-if="isStarted">
            <div class="answer-send">
                <input type="text" v-model="answer">
                <button class="btn btn-primary" @click="sendAnswer">Ok</button>
            </div>
            <hands :data="hands" :prop="500" v-if="isHandShowed"></hands>
        </div>
    </div>
</template>

<script>
    import Store from '../../store/config'
    import Random from '../../helpers/random'
    import Hands from '../../helpers/hands'
    export default {
        data() {
            return {
                isStarted: false,
                isHandShowed: true,
                question_type: 0,
                speed: 0,
                count: 0,
                hands: null,
                answer: null
            }
        },
        created() {
            Store.initPhraseReading();
            this.question_type = Store.state.phraseReading.question_type;
            this.speed = Store.state.phraseReading.speed;
            let min, max;
            if(this.question_type === 0) {
                min = 1;
                max = 9;
                this.count = Random.make(min, max);
            } else if(this.question_type === 1) {
                min = 10;
                max = 90;
                this.count = Random.makeOnlyDecimal(min, max);
            } else {
                min = 1;
                max = 99;
                this.count = Random.make(min, max);
            }
            Store.setPhraseReadingQuestion(this.count);
            if(Object.keys(this.$route.query).length !== 0) {
                this.isStarted = this.$route.query.isShowed;
                Store.increaseQuestionCounter();
                this.next();
            }
        },
        methods: {
            next() {
                this.isStarted = true;
                this.calculate();
                if(this.speed !== 0) {
                    setTimeout(() => {
                        this.isHandShowed = false
                    }, this.speed * 1000);
                }
            },
            calculate() {
                this.hands = Hands.calculate(this.count);
            },
            sendAnswer() {
                Store.setPhraseReadingAnswer(this.answer);
                this.$router.push('/paraphrase/reading/result');
            }
        }
    }
</script>