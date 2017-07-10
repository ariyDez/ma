<template>
    <div class="hand__right">
        <empty-right v-if="showHand(0)" :size="size"></empty-right>
        <one-right v-if="showHand(1)" :size="size"></one-right>
        <two-right v-if="showHand(2)" :size="size"></two-right>
        <three-right v-if="showHand(3)" :size="size"></three-right>
        <four-right v-if="showHand(4)" :size="size"></four-right>
        <big-one-right v-if="showHand(5)" :size="size"></big-one-right>
        <big-two-right v-if="showHand(6)" :size="size"></big-two-right>
        <big-three-right v-if="showHand(7)" :size="size"></big-three-right>
        <big-four-right v-if="showHand(8)" :size="size"></big-four-right>
        <five-right v-if="showHand(9)" :size="size"></five-right>
    </div>
</template>

<script>
    export default {
        props: ['data', 'size'],
        created() {
        },
        methods: {
            showHand(state) {
                state = parseInt(state);
                if(this.data.big) {
                    if(state < 5) {
                        return false;
                    }
                    return state === this.data.count;
                } else {
                    if(state < 5) {
                        return state === this.data.count;
                    }
                    return false;
                }
            }
        }
    }
</script>