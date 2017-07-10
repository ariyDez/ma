<template>
    <div class="container">
        <hands :data="hands"></hands>
        <div>
            <input type="text" v-model="count" @keyup.enter="calculate">
            <button class="btn btn-primary" @click="calculate">Calculate</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hands: {
                    left: {
                        big: true,
                        count: 90
                    },
                    right: {
                        big: false,
                        count: 3
                    }
                },
                count: 0
            }
        },
        methods: {
            calculate() {
                if(!this.count) {
                    this.count = 0;
                }
                this.count = parseInt(this.count);
                const right = this.count % 10;
                const left = this.count - right;

                if(right >= 5) {
                    this.hands.right.big = true;
                } else {
                    this.hands.right.big = false;
                }

                if(left >= 50) {
                    this.hands.left.big = true;
                } else {
                    this.hands.left.big = false;
                }

                this.hands.left.count = left;
                this.hands.right.count = right;
            }
        }
    }
</script>