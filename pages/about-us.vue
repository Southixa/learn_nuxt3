<template>
    <div>
        About Us
        <div>
            <input v-model="frm.email" type="text" name="" id="">
            {{ frm.email }}
        </div>
        <div>
            <hr>
            this is counter => {{ counter }}
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
})

const frm = reactive({
    email: 'example.com',
    password: '',
})

const counter = useState('counter', () => 0);

</script>

<style lang="scss" scoped>

</style>