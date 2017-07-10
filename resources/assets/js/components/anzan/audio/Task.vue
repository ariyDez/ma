<template>
    <div class="row anzan-audio">
        <div class="anzan-audio__number">
            {{ number }}
        </div>
    </div>
</template>

<script>
    import Random from '../../../helpers/random'
    import Store from '../../../store/anzan'
    export default {
        data() {
            return {
                number: null,
                min: null,
                max: null,
                speed: null,
                action: null,
                operation_deal: null,
                multiply_numbers: [],
                diff_numbers: [],
                isFirst: true,
                result: 0,
                counter: 0
            }
        },
        created() {
            Store.initAudio();
            this.init();
            this.setNumber();
        },
        methods: {
            init() {
                this.min = Store.state.min;
                this.max = Store.state.max;
                this.speed = Store.state.speed;
                this.action = Store.state.action;
                this.operation_deal = Store.state.operation_deal;
                this.multiply_numbers = Store.state.multiply_numbers;
                this.diff_numbers = Store.state.diff_numbers;
            },
            voiceEndCallback() {
                this.counter++;
                if (this.counter !== this.operation_deal) {
                    this.sound();
                } else {
                    setTimeout(() => {
                        Store.setAudioQuestion(this.result);
                        this.$router.push('/anzan/audio/result');
                    }, 1000);
                }
            },
            sound() {
                function voiceStartCallback() {}
                const parameters = {
                    onstart: voiceStartCallback,
                    onend: this.voiceEndCallback
                };
                if (this.isFirst) {
                    this.number = Random.makeSpecialCeil(this.min, this.max, this.action);
                    this.isFirst = false;
                } else {
                    this.number = Random.makeSpecialFloor(this.min, this.max, this.action);
                }
                this.result += this.number;
                responsiveVoice.speak(this.number.toString(), 'Russian Female', parameters);
            },
            setNumber() {
                this.sound();
            }
        }
    }
</script>