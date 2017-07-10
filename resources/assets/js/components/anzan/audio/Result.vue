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
    </div>
</template>

<script>
    import Store from '../../../store/anzan'
    export default {
        data() {
            return {
                hands: null,
                answerHands: null,
                answer: null,
                question: null,
                success: null,
                answered: false,
            }
        },
        created() {
            Store.initAudio();
            this.init();

        },
        methods: {
            init() {
                this.question = Store.state.question;
            },
            clickAnswer() {
                Store.setAudioAnswer(this.answer);
                this.answered = true;
            }
        }
    }
</script>