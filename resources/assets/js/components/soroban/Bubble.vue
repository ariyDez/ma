<template>
    <div class="bubble" :class="className" @click="setClick(isClickedTask)">
        <svg width="50" height="50">
            <ellipse cx="25" cy="25" rx="25" ry="10" stroke="black" stroke-width="1" :fill="color"></ellipse>
        </svg>
    </div>
</template>

<script>
    export default {
        props: ['className', 'value', 'state', 'rank', 'isClickedTask'],
        data() {
            return {
                selected: false,
                clicked: false,
                countedValue: 0,
                color: 'red'
            }
        },
        created() {
            if (!this.isClickedTask) {
                this.calculate(false);
            }
            this.$parent.$on('clickedItem', (item) => {
                if (this.rank !== item.rank) return;
                if (this.state < item.state) {
                    this.color = 'blue';
                    this.calculate(true);
                } else if (this.state > item.state) {
                    this.color = 'red';
                    this.calculate(false);
                }
            });
        },
        methods: {
            calculate(clicked) {
                if (this.isClickedTask) {
                    if (clicked) {
                        const rank = parseInt(this.rank);
                        if (this.state === 5) {
                            this.countedValue = this.state * Math.pow(10, rank);
                        } else {
                            this.countedValue = Math.pow(10, rank);
                        }
                        this.$parent.$emit('changedValue', { countedValue: this.countedValue, state: this.state });
                        return;
                    }
                    this.countedValue = 0;
                    this.$parent.$emit('changedValue', { countedValue: this.countedValue, state: this.state });
                    return;
                }
                let color;
                const state = parseInt(this.state);
                const value = parseInt(this.value);
                if (state === 5) {
                    color = value >= state;
                } else {
                    if (value >= 5) {
                        color = value - 5 >= state;
                    } else {
                        color = value >= state;
                    }
                }
                this.color = color ? 'blue' : 'red';
            },
            setClick(isClTask) {
                if (isClTask) {
                    this.clicked = !this.clicked;
                    this.color = this.clicked ? 'blue' : 'red';
                    this.calculate(this.clicked);
                    if (this.state === 5) {
                        return;
                    }
                    this.$parent.$emit('clickedItemInit', { state: this.state, rank: this.rank });
                }
            }
        }
    }
</script>