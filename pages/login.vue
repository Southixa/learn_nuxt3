<template>
    <div>
        <h1>Login</h1>
        <input type = "text"  @input="typeEmail">
        <br>
        <input type = "password" v-model="frm.password">
        <br>
        <input type = "button" value = "Login">
    </div>
    <div>
      Email: {{ frm.email }},
      <br>
      Password: {{ frm.password }}
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})

function typeEmail(e) {
  frm.value.email += e.data;
  console.log(e.data);
}

const frm = ref({
  email: '',
  password: '',
});

</script>

<style lang="scss" scoped>

</style>