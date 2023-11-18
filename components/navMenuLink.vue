<template>
    <nuxt-link :to="to">
        <div class="menu-container">
            <div class="image-container">
                <img :src="imageSrc" alt="" class="icon-image">
            </div>
            <div>
                <p class="menu-text">{{name}}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ["to", "imageSrc", "name"]
};

</script>

<style scoped>
.menu-container {
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 6px;
}
.menu-container:hover {
    cursor: pointer;
}
.image-container {
    margin-right: 7px;
}
.icon-image {
    width: 21px;
    height: 21px;
    border-radius: 5px;
    box-shadow: 1px 1px 4px -2px rgba(0,0,0,0.56);
    -webkit-box-shadow: 1px 1px 4px -2px rgba(0,0,0,0.56);
    -moz-box-shadow: 1px 1px 4px -2px rgba(0,0,0,0.56);
}
.menu-text {
    font-size: 14px;
    color: #393939;
}
.space-devider {
    height: 15px;
}
</style>