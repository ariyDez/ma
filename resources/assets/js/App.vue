<template>
    <div class="row">
        <nav class="navbar">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/">Main</router-link>
                    </li>
                    <li>
                        <router-link to="/first">First</router-link>
                    </li>
                    <li>
                        <router-link to="/second">Second</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>