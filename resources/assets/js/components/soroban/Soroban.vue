<template>
    <div class="soroban">
        <soroban-item v-for="(item, index) in sorobanObject" :value="item.value" :key="item.rank"
                      :rank="item.rank" :index="index" :isClickedTask="isClickedTask"
        ></soroban-item>
    </div>
</template>

<script>
    export default {
        props: ['value', 'isClickedTask'],
        data() {
            return {
                sorobanNames: [
                    {
                        name: '0a',
                        value: 0
                    },
                    {
                        name: '1b',
                        value: 0
                    },
                    {
                        name: '2c',
                        value: 0
                    },
                    {
                        name: '3d',
                        value: 0
                    },
                    {
                        name: '4e',
                        value: 0
                    },
                    {
                        name: '5f',
                        value: 0
                    },
                    {
                        name: '6g',
                        value: 0
                    },
                    {
                        name: '7h',
                        value: 0
                    },
                    {
                        name: '8i',
                        value: 0
                    },
                    {
                        name: '9j',
                        value: 0
                    }
                ]
            }
        },
        created() {
            this.$on('sorobanItemCalculated', (item) => {
                this.sorobanNames.forEach((sorobanItem) => {
                    if (sorobanItem.name === item.rank) {
                        sorobanItem.value = item.summary;
                    }
                });
                this.calculate();
            })
        },
        computed: {
            sorobanObject: function() {
                const abacus = [];
                let value = parseInt(this.value);

                for(let i=0;i<10;i++) {
                    if (value >= Math.pow(10, i)) {
                        const temp = Math.floor(value % Math.pow(10, i + 1) / Math.pow(10, i));
                        const abacusItem = {
                            value: temp,
                            rank: this.sorobanNames[i].name
                        };
                        abacus.push(abacusItem);
                        value = value - temp;
                        continue;
                    }
                    break;
                }
                return abacus.reverse();
            }
        },
        methods: {
            calculate() {
                let summary = 0;
                this.sorobanNames.forEach((sorobanItem) =>{
                    summary += sorobanItem.value;
                });
                this.$emit('totalCalculated', summary);
            }
        }
    }
</script>