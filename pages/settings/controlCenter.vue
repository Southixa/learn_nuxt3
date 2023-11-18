<template>
    <div class="page-container">
        <div class="header-container">
            <Icon name="uiw:left" color="#61605F" size="19px" class="back-icon" />
            <Icon name="uiw:right" color="#61605F" size="19px" class="forward-icon" />
            <strong><p class="title-text">Control Center</p></strong>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>
.page-container {
    width: 100%;
    height: 100%;
    background-color: #EDECEB;
    box-shadow: inset 1px 0 0 0 #D4D4D2;
    padding: 10px 20px;
}
.header-container {
    height: 35px;
    display: flex;
    align-items: center;
}
.title-text {
    color: #474747;
    font-size: 16px;
}
.back-icon {
    margin-right: 15px;
}
.forward-icon {
    margin-right: 14px;
}
</style>