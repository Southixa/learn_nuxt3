<template>
    <div>
        <div>{{ exponent }}</div>
        <div>
            <span><button @click="getExponent()">Get Exponent</button></span>
        </div>
    </div>
</template>

<script setup lang="ts">
const { exponent, getExponent } = useExponent();


</script>

<style scoped>

</style>