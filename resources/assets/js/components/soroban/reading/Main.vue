<template>
    <div class="panel panel-default">
        <div class="panel-heading">Соробан чтение - Настройки</div>
        <div class="panel-body">
            Минимальное значение:  <input type="number" min="0" max="9999999999" v-model="min"><br />
            Максимальное значение: <input type="number" min="0" max="9999999999" v-model="max">
            <h3>Скорость перехода вопросов (в сек.)</h3>
            <select name="" id="" v-model="speed">
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
            </select>
            <small>0 - время не ограничено</small>
            <button class="btn btn-primary" @click="send">Подтвердить</button>
        </div>
    </div>
</template>

<script>
    import Store from '../../../store/soroban'
    export default {
        data() {
            return {
                min: 0,
                max: 0,
                speed: 2
            }
        },
        methods: {
            send() {
                Store.setReading(this.min, this.max, this.speed);
                this.$router.push('/soroban/reading/task')
            }
        }
    }
</script>