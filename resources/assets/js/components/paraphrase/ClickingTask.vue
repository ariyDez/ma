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
            <h1>{{count}}</h1>
            <hands :data="hands" :prop="500"></hands>
            <div class="row">
                <div class="col-md-4">
                    <h3>Левая рука</h3>
                    <input type="checkbox" name="left_hand" value="50" v-model="left_hand_fingers"> Большой палец<br>
                    <input type="checkbox" name="left_hand" value="40" v-model="left_hand_fingers"> Указательный палец<br>
                    <input type="checkbox" name="left_hand" value="30" v-model="left_hand_fingers"> Средний палец<br>
                    <input type="checkbox" name="left_hand" value="20" v-model="left_hand_fingers"> Безымяный палец<br>
                    <input type="checkbox" name="left_hand" value="10" v-model="left_hand_fingers"> Мизинец<br>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <h3>Правая рука</h3>
                    <input type="checkbox" name="right_hand" value="5" v-model="right_hand_fingers"> Большой палец<br>
                    <input type="checkbox" name="right_hand" value="4" v-model="right_hand_fingers"> Указательный палец<br>
                    <input type="checkbox" name="right_hand" value="3" v-model="right_hand_fingers"> Средний палец<br>
                    <input type="checkbox" name="right_hand" value="2" v-model="right_hand_fingers"> Безымяный палец<br>
                    <input type="checkbox" name="right_hand" value="1" v-model="right_hand_fingers"> Мизинец<br>
                </div>
            </div>
            <button class="btn btn-primary" @click="sendAnswer">Send Answer</button>
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
                answer: null,
                left_hand_fingers: [],
                right_hand_fingers: [],
                left_answer: 0,
                right_answer: 0
            }
        },
        created() {
            Store.removePhraseClickingAnswer();
            Store.initPhraseClicking();
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
            Store.setPhraseClickingQuestion(this.count);
            if(Object.keys(this.$route.query).length !== 0) {
                this.isStarted = this.$route.query.isShowed;
                this.next();
            }
        },
        watch: {
            right_hand_fingers: function(newVal) {
                let answer = 0;
                let left_answer = 0;
                newVal.forEach((val) => {
                    val = parseInt(val);
                    if (val === 5) {
                        answer += val;
                        return;
                    }
                    answer += 1;
                });
                this.left_hand_fingers.forEach((val) => {
                    val = parseInt(val);
                    if (val === 50) {
                        left_answer += val;
                        return;
                    }
                    left_answer += 10;
                });
                const total = answer + left_answer;
                Store.setPhraseClickingAnswer(total);
                this.calculate(total);
            },
            left_hand_fingers: function(newVal) {
                let answer = 0;
                let right_answer = 0;
                newVal.forEach((val) => {
                    val = parseInt(val);
                    if (val === 50){
                        answer += val;
                        return;
                    }
                    answer += 10;
                });
                this.right_hand_fingers.forEach((val) => {
                    val = parseInt(val);
                    if (val === 5) {
                        right_answer += val;
                        return;
                    }
                    right_answer += 1;
                });
                const total = answer + right_answer;
                Store.setPhraseClickingAnswer(total);
                this.calculate(total);
            }
        },
        methods: {
            next() {
                this.isStarted = true;
                this.calculate(0);
                if(this.speed !== 0) {
                    setTimeout(() => {
                        this.sendAnswer();
                    }, this.speed * 1000);
                }
            },
            calculate(val) {
                this.hands = Hands.calculate(val);
            },
            sendAnswer() {
                if (!localStorage.getItem('phrase-clicking-answer')) {
                    Store.setPhraseClickingAnswer(0);
                }
                this.$router.push('/paraphrase/clicking/result');
            },
            toggle(value) {

            }
        }
    }
</script>