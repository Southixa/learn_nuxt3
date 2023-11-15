<script setup lang="ts">
    const {counter, increment, decrement } = useCounter();

    const msg = 'Hello World';
    const name = 'Vue 3';

    //const counter = useState('counter', () => 0);
    let counter2 = 0;

    // function increment() {
    //     counter2++;
    // }

    // function increment2() {
    //     counter.value++;
    //     console.log(counter.value);
    // }

</script>

<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ counter }}</h1>
        <div>
            <button @click="decrement()">decrease value</button>
            <button @click="increment()">increase value</button>
        </div>
        <h1>{{ counter2 }}</h1>
        <div>
            <button @click="increment()">decrease value</button>
            <button @click="increment()">increase value</button>
        </div>
    </div>
</template>

<style scoped>

</style>