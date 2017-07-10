<template>
    <div class="hand__left">
        <empty-left v-if="showHand(0)" :size="size"></empty-left>
        <one-left v-if="showHand(1)" :size="size"></one-left>
        <two-left v-if="showHand(2)" :size="size"></two-left>
        <three-left v-if="showHand(3)" :size="size"></three-left>
        <four-left v-if="showHand(4)" :size="size"></four-left>
        <big-one-left v-if="showHand(5)" :size="size"></big-one-left>
        <big-two-left v-if="showHand(6)" :size="size"></big-two-left>
        <big-three-left v-if="showHand(7)" :size="size"></big-three-left>
        <big-four-left v-if="showHand(8)" :size="size"></big-four-left>
        <five-left v-if="showHand(9)" :size="size"></five-left>
    </div>
</template>

<script>
    export default {
        props: ['data', 'size'],
        created() {
        },
        methods: {
            showHand(state) {
                if(this.data.big) {
                    if(state < 5) {
                        return false;
                    }
                    return (state * 10) === this.data.count;
                } else {
                    if(state < 5) {
                        return (state * 10) === this.data.count;
                    }
                    return false;
                }
            }
        }
    }
</script>