<template>
    <div class="row">
        <div class="col-md-6">
            <div class="col-md-12">
                Количество вопросов: {{ question_deal.value }}
            </div>
            <div class="col-md-12">
                Количество верных ответов: {{ right.value }}
            </div>
            <div class="col-md-12">
                Количество неверных ответов: {{ wrong.value }}
            </div>
        </div>
        <div class="col-md-6">
            <div class="col-md-12">
                Результат
            </div>
            <div class="col-md-12">
                Процент успеха
            </div>
            <div class="col-md-12">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :aria-valuenow="progressValue" aria-valuemin="0" aria-valuemax="100" :style="`width: ${progressValue}%;`">
                        {{ progressValue }}%
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['question_deal', 'right', 'wrong'],
        computed: {
            progressValue: function() {
                return parseInt(this.right.value / this.question_deal.value * 100);
            }
        }
    }
</script>