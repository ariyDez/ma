<template>
    <div class="panel panel-default">
        <div class="panel-heading">Соробан чтение - Настройки</div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-6">
                    <h3>Вид операции</h3>
                    <input type="radio" v-model="action" value="0"> Сложение<br />
                    <input type="radio" v-model="action" value="1"> Вычитание<br />
                    <input type="radio" v-model="action" value="2"> Сложение и вычитание<br />
                    <h3>Числа используемые при сложении</h3>
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="1"> 1
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="2"> 2
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="3"> 3
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="4"> 4
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="5"> 5
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="6"> 6
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="7"> 7
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="8"> 8
                    <input type="checkbox" name="multiply_number" v-model="multiply_numbers" value="9"> 9<br />
                    <input type="checkbox"> Пусть действия выполняются напрямую
                    <h3>Числа используемые при вычитании</h3>
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="1"> 1
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="2"> 2
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="3"> 3
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="4"> 4
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="5"> 5
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="6"> 6
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="7"> 7
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="8"> 8
                    <input type="checkbox" name="diff_number" v-model="diff_numbers" value="9"> 9<br />
                    <input type="checkbox"> Пусть действия выполняются напрямую
                </div>
                <div class="col-md-6">
                    <h3>Другие настройки</h3>
                    Количество вопросов:
                    <select name="question_deal" id="" v-model="question_deal">
                        <option :value="n" v-for="n in 14">{{n}}</option>
                    </select><br />
                    Количество операций:
                    <select name="operation_deal" id="" v-model="operation_deal">
                        <option :value="n" v-for="n in 10">{{n}}</option>
                    </select><br />
                    Минимальное количество цифр:
                    <select name="min" id="" v-model="min">
                        <option :value="n" v-for="n in 5">{{n}}</option>
                    </select><br />
                    Максимальное количество цифр:
                    <select name="max" id="" v-model="max">
                        <option :value="n" v-for="n in 5">{{n}}</option>
                    </select><br />
                    Скорость перехода вопросов (в сек.):
                    <select name="speed" id="" v-model="speed">
                        <option value="0">0</option>
                        <option value="0.2">0.2</option>
                        <option value="0.3">0.3</option>
                        <option value="0.4">0.4</option>
                        <option value="0.5">0.5</option>
                        <option value="0.6">0.6</option>
                        <option value="0.7">0.7</option>
                        <option value="0.8">0.8</option>
                        <option value="0.9">0.9</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option selected value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select> <br />
                    Максимальное значение:
                    <input type="number" min="0" v-model="max_value" name="max_value"><br />
                    Первое число будет дано относительно максимального значения
                    <input type="checkbox">
                </div>
            </div>

            <button class="btn btn-primary" @click="send">Подтвердить</button>
        </div>
    </div>
</template>

<script>
    import Store from '../../store/arithmetic'
    export default {
        data() {
            return {
                min: 1,
                max: 1,
                max_value: 0,
                speed: 0,
                action: 1,
                question_deal: 1,
                operation_deal: 1,
                multiply_numbers: [],
                diff_numbers: []
            }
        },
        methods: {
            send() {
                Store.set(this.min, this.max, this.max_value, this.speed, this.action, this.question_deal, this.operation_deal, this.multiply_numbers, this.diff_numbers);
                this.$router.push('/arithmetic/task')
            }
        }
    }
</script>