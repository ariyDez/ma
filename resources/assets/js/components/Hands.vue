<template>
    <div class="hand">
        <left-hand :data="data.left" :size="size"></left-hand>
        <right-hand :data="data.right" :size="size"></right-hand>
    </div>
</template>

<script>
    export default {
        props: ['data', 'prop'],
        data() {
            return {
                leftHand: this.data.left,
                rightHand: this.data.right,
                size: {
                    width: this.prop,
                    height: this.prop
                }
            }
        }
    }
</script>