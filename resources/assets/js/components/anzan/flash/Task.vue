<template>
    <div class="row anzan-flash">
        <div class="anzan-flash__number">
            {{ number }}
        </div>
        <audio ref="flash" src="/sounds/ping.mp3"></audio>
    </div>
</template>

<script>
    import Store from '../../../store/anzan'
    import Random from '../../../helpers/random'
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
                result: null
            }
        },
        created() {
            Store.initFlash();
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
            setNumber() {
                for(let i=0;i<this.operation_deal;i++) {
                    setTimeout(() => {
                        if (this.isFirst) {
                            this.number = Random.makeSpecialCeil(this.min, this.max, this.action);
                            this.isFirst = false;
                        } else {
                            this.number = Random.makeSpecialFloor(this.min, this.max, this.action);
                        }
                        this.result += this.number;
                        this.$refs.flash.play();
                        if (i === this.operation_deal - 1) {
                            setTimeout(() => {
                                Store.setFlashQuestion(this.result);
                                this.$router.push('/anzan/flash/result');
                            }, 1000);
                        }
                    }, 1000*i);
                }
            }
        }
    }
</script>