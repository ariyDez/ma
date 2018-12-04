<template>
    <div>
        <div class="" v-if="!isStarted">
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
                <router-link to="/arithmetic">Настройки</router-link>
            </button>
            <button class="btn btn-primary" @click="next">Далее</button>
        </div>
        <div class="" v-if="isStarted">
            <div class="row">
                <div class="col-md-4">
                    <h3>Вопрос</h3>
                    <div>{{question_number}}/{{question_deal}}</div>
                </div>
                <div class="col-md-4">
                    <div v-for="(value, index) in operation_deal">{{operation_numbers[index]}}</div>
                    <div><input type="text" v-model="answer"></div>
                    <button class="btn btn-primary" @click="nextAnswer()">OK</button>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../../store/arithmetic'
    import Random from '../../helpers/random'
    export default {
        data() {
            return {
                min: null,
                max: null,
                max_value: null,
                speed: null,
                action: null,
                question_deal: null,
                operation_deal: null,
                multiply_numbers: [],
                diff_numbers: [],
                questions: [],
                answers: [],
                answer: null,
                question_number: 1,
                isStarted: false,
                operation_numbers: [],
                question_operation_numbers: []
            }
        },
        created() {
            Store.init();
            console.log('store', Store.state);
            this.init();
            if(Object.keys(this.$route.query).length !== 0) {
                this.next();
            }
        },
        methods: {
            init(){
                this.min = Store.state.min;
                this.max = Store.state.max;
                this.max_value = Store.state.max_value;
                this.speed = Store.state.speed;
                this.action = Store.state.action;
                this.question_deal = Store.state.question_deal;
                this.operation_deal = Store.state.operation_deal;
                this.multiply_numbers = Store.state.multiply_numbers;
                this.diff_numbers = Store.state.diff_numbers;
                this.initOperationNumbers();
            },
            initOperationNumbers() {
                this.operation_numbers = [];
                let result = 0;
                for(let i=0;i<this.operation_deal;i++) {
                    let number;
                    if (i === 0) {
                        if (this.action === 0) {
                            number = Random.makeSpecialCeil(this.min, this.max, 0, this.multiply_numbers);
                        } else if(this.action === 1) {
                            number = Random.makeSpecialCeil(this.min, this.max, 0, this.diff_numbers);
                        }

                    } else {
                        if (this.action === 0) {
                            number = Random.makeSpecialFloor(this.min, this.max, this.action, this.multiply_numbers);
                        } else if(this.action === 1) {
                            number = Random.makeSpecialFloor(this.min, this.max, this.action, this.diff_numbers);
                        }
                    }
                    result += number;
                    this.operation_numbers.push(number);
                }
                this.questions.push(result);
                this.question_operation_numbers.push(this.operation_numbers);
            },
            next() {
                this.isStarted = true;
                if(this.speed !== 0) {
                    setTimeout(() => {
                        this.sendAnswer();
                    }, this.speed * 1000);
                }
            },
            nextAnswer() {
                this.answers.push(this.answer);
                this.answer = null;
                if (this.question_number === this.question_deal) {
                    this.sendAnswer();
                }
                this.initOperationNumbers();
                this.question_number++;
            },
            setTotal(total) {
                this.answer = total;
            },
            sendAnswer() {
                for(let i=this.question_deal;i<30;i++) {
                    this.questions.push(null);
                }
                Store.setQuestions(this.questions);
                Store.setQuestionOperationNumbers(this.question_operation_numbers);
                Store.setAnswers(this.answers);
                this.$router.push('/arithmetic/result');
            }
        }
    }
</script>