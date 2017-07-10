<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>Первый год обучения</h2>
                <ul>
                    <li>
                        <router-link to="/paraphrase/reading">Парифметика - чтение пальцев</router-link>
                    </li>
                    <li>
                        <router-link to="/paraphrase/clicking">Парифметика - нажатие пальцев</router-link>
                    </li>
                    <li>
                        <router-link to="/soroban/reading">Соробан - чтение</router-link>
                    </li>
                    <li>
                        <router-link to="/soroban/writing">Соробан - набор</router-link>
                    </li>
                    <li>
                        <router-link to="/arithmetic">Сложение/вычитание</router-link>
                    </li>
                    <li>
                        <router-link to="/anzan/flash">Флэш Анзан</router-link>
                    </li>
                    <li>
                        <router-link to="/anzan/audio">Голосовой Анзан</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-6"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>