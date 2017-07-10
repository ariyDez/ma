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
            <soroban :value="question" v-if="isSorobanShowed" :isClickedTask="false"></soroban>
            <input type="text" v-model="answer">
            <button class="btn btn-primary" @click="sendAnswer">Ok</button>
        </div>
    </div>
</template>

<script>
    import Store from '../../../store/soroban'
    import Random from '../../../helpers/random'
    export default {
        data() {
            return {
                isStarted: false,
                isSorobanShowed: true,
                min: null,
                max: null,
                speed: 0,
                question: null,
                answer: null
            }
        },
        created() {
            Store.initReading();
            this.speed = Store.state.speed;
            this.min = Store.state.min;
            this.max = Store.state.max;
            this.question = Random.make(this.min, this.max);
            Store.setReadingQuestion(this.question);
            if(Object.keys(this.$route.query).length !== 0) {
                this.next();
            }
        },
        methods: {
            next() {
                this.isStarted = true;
                if(this.speed !== 0) {
                    setTimeout(() => {
                        this.isSorobanShowed = false
                    }, this.speed * 1000);
                }
            },
            sendAnswer() {
                Store.setReadingAnswer(this.answer);
                this.$router.push('/soroban/reading/result');
            }
        }
    }
</script>