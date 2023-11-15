<template>
    <!-- <div>
        <nav>
            <nuxt-link to="/settings/account">Account</nuxt-link>
            <nuxt-link to="/settings/general">General</nuxt-link>
            <NuxtPage/>
        </nav>
    </div> -->
    <div class="bg-gray-50 w-screen h-screen flex justify-center items-center">
        <div style="width: 800px; height: 900px" class="setting_panel bg-gray-400 rounded-lg shadow-2xl flex overflow-hidden">
            <div class="h-full bg-gray-500 w-1/3 p-2">
                <div class="my-2 ml-2">
                    <span class="w-4 h-4 inline-block bg-red-500 rounded-full mr-1"></span>
                    <span class="w-4 h-4 inline-block bg-yellow-500 rounded-full mr-1"></span>
                    <span class="w-4 h-4 inline-block bg-green-500 rounded-full"></span>
                </div>
                <div>
                    <input type="text" class="w-full rounded-md p-1" placeholder="Search">
                </div>
            </div>
            <div class="h-full bg-gray-600 w-2/3 p-6">
                1
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})



</script>

<style scoped>
</style>
