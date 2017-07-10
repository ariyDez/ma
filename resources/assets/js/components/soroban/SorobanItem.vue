<template>
    <div class="soroban__item">
        <soroban-line></soroban-line>
        <soroban-bubble :className="first" :value="value" :rank="rank" :state="5" :isClickedTask="isClickedTask"></soroban-bubble>
        <soroban-bubble :className="second" :value="value" :rank="rank" :state="1" :isClickedTask="isClickedTask"></soroban-bubble>
        <soroban-bubble :className="third" :value="value" :rank="rank" :state="2" :isClickedTask="isClickedTask"></soroban-bubble>
        <soroban-bubble :className="fourth" :value="value" :rank="rank" :state="3" :isClickedTask="isClickedTask"></soroban-bubble>
        <soroban-bubble :className="fifth" :value="value" :rank="rank" :state="4" :isClickedTask="isClickedTask"></soroban-bubble>
    </div>
</template>

<script>
    export default {
        props: ['value', 'index', 'rank', 'isClickedTask'],
        data() {
            return {
                first: 'first',
                second: 'second',
                third: 'third',
                fourth: 'fourth',
                fifth: 'fifth',
                residue: 4,
                bubbles: [
                    {
                        value: 0
                    },
                    {
                        value: 0
                    },
                    {
                        value: 0
                    },
                    {
                        value: 0
                    },
                    {
                        value: 0
                    },
                ]
            }
        },
        created() {
            this.$on('changedValue', (item) => {
                this.changeValue(item);
            });
            this.$on('clickedItemInit', (item) => {
                this.clickedItem(item);
            });
        },
        methods: {
            changeValue(item){
                this.bubbles[item.state-1].value = item.countedValue;
                this.calculate();
            },
            clickedItem(state) {
                this.$emit('clickedItem', state);
            },
//            changeValue1(value) {
//                this.bubbles[0].value = value;
//                this.calculate();
//            },
//            changeValue2(value) {
//                this.bubbles[1].value = value;
//                this.calculate();
//            },
//            changeValue3(value) {
//                this.bubbles[2].value = value;
//                this.calculate();
//            },
//            changeValue4(value) {
//                this.bubbles[3].value = value;
//                this.calculate();
//            },
//            changeValue5(value) {
//                this.bubbles[4].value = value;
//                this.calculate();
//            },
            calculate() {
                let summary = 0;
                this.bubbles.forEach((bubble) => {
                    summary += bubble.value;
                });
                this.$parent.$emit('sorobanItemCalculated', {rank: this.rank, summary: summary});
            }
        }
    }
</script>