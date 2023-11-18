<template>
    <div class="page">
        <div class="setting-panel">

            <div class="nav-container">
                <div class="header-container">
                    <div class="exit-container">
                        <span class="close-btn"></span>
                        <span class="restore-btn"></span>
                        <span class="minimize-btn"></span>
                    </div>
                    <div class="search-container">
                        <div class="icon-search">
                            <Icon name="octicon:search-24" color="#424241" size="17px" />
                        </div>
                        <input type="text" placeholder="Search" class="search">
                    </div>
                </div>
                <div class="nav-wrapper">
                    <div class="profile-container">
                        <div class="profile-image-container">
                            <img src="/image/profile.png" class="icon-profile-image">
                        </div>
                        <div>
                            <p class="profile-name-text">Southixa Philavong</p>
                            <p class="profile-apple-id">Apple ID</p>
                        </div>
                    </div>
                    <div class="issue-container">
                        <p class="issue-text">Some iCloud Data<br>
                           Isn't Syncing 
                        </p>
                        <span class="issue-noti"><p>1</p></span>
                    </div>
                    <div @:click="activeMenu" v-for="data in navMenuData" :key="data.id ">
                        <navMenuLink
                            v-if="(Object.keys(data).length > 0)"
                            :to="data.to"
                            :imageSrc="data.imageSrc"
                            :name="data.name"
                        />
                        <div v-else class="space-divider">

                        </div>
                    </div>
                </div>
            </div>

            <div class="page-container">
                <NuxtPage/>
            </div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})

const navMenuData = [
    { to: "/settings/wifi", imageSrc: "/icon/wifi.png", name: "Wi-Fi" },
    { to: "/settings/bluetooth", imageSrc: "/icon/bluetooth.png", name: "Bluetooth" },
    { to: "/settings/network", imageSrc: "/icon/network.png", name: "Network" },
    {},
    { to: "/settings/notifications", imageSrc: "/icon/notifications.png", name: "Notifications" },
    { to: "/settings/sound", imageSrc: "/icon/sound.png", name: "Sound" },
    { to: "/settings/focus", imageSrc: "/icon/focus.png", name: "Focus" },
    { to: "/settings/screenTime", imageSrc: "/icon/screen_time.png", name: "Screen Time" },
    {},
    { to: "/settings/general", imageSrc: "/icon/general.png", name: "General" },
    { to: "/settings/appearance", imageSrc: "/icon/appearance.png", name: "Appearance" },
    { to: "/settings/accessibility", imageSrc: "/icon/accessibility.png", name: "Accessibility" },
    { to: "/settings/controlCenter", imageSrc: "/icon/control_center.png", name: "Control Center" },
    { to: "/settings/siriAndSpotlight", imageSrc: "/icon/siri_spotlight.png", name: "Siri & Spotlight" },
    { to: "/settings/privacyAndSecurity", imageSrc: "/icon/privacy_security.png", name: "Privacy & Security" },
    {},
    { to: "/settings/general", imageSrc: "/icon/general.png", name: "General" },
    { to: "/settings/appearance", imageSrc: "/icon/appearance.png", name: "Appearance" },
    { to: "/settings/accessibility", imageSrc: "/icon/accessibility.png", name: "Accessibility" },
    { to: "/settings/controlCenter", imageSrc: "/icon/control_center.png", name: "Control Center" },
    { to: "/settings/siriAndSpotlight", imageSrc: "/icon/siri_spotlight.png", name: "Siri & Spotlight" },
    { to: "/settings/privacyAndSecurity", imageSrc: "/icon/privacy_security.png", name: "Privacy & Security" },
]

let lastActiveMenu;


function activeMenu (e) {
    let currentActiveMenu;
    if(e.target.className != "menu-container") {
        currentActiveMenu = e.target.parentNode.parentNode;
    } else {
        currentActiveMenu =  e.target;
    }

    console.log(currentActiveMenu.classList);
    currentActiveMenu.classList.add("menu-active");

    if(lastActiveMenu) {
        lastActiveMenu.classList.remove("menu-active");
        lastActiveMenu = currentActiveMenu;
    } else {
        lastActiveMenu = currentActiveMenu;
    }

    // console.log(e.target.className == "menu-container");
    //console.log(e.target.parentNode);
    //console.log(e.target.parentNode.parentNode.className);
    //console.log(e.target.parentNode);
}



</script>

<style scoped>
@font-face {
    font-family: 'SanFrancisco';
    src: url('/font/SF-Pro-Display-Light.otf')  format('opentype'),
}
.page {
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SanFrancisco;
    letter-spacing: 0.3px;
}
.setting-panel{
    width: 700px;
    height: 800px;
    background-color: #e0e0de;
    border-radius: 14px;
    box-shadow: 1px 24px 71px -15px rgba(0,0,0,0.76);
    -webkit-box-shadow: 1px 24px 71px -15px rgba(0,0,0,0.76);
    -moz-box-shadow: 1px 24px 71px -15px rgba(0,0,0,0.76);
    display: flex;
    overflow: hidden;
    border: 1px solid #cfcfce;
}
.nav-container {
    width: 32%;
    height: 100%;
    background-color: #e0e0de;
    border-top: 1px solid #ededec;
    overflow-x: hidden;
    overflow-y: scroll;
}
.nav-container::-webkit-scrollbar {
    width: 0px;
}
.page-container {
    width: 68%;
    height: 100%;
    background-color: #EDECEB;
    border-top: 1px solid #ededec;
    box-shadow: inset 1px 0 0 0 #D4D4D2;
}
.header-container {
    background-color: #e0e0de;
    padding: 10px 10px 12px 10px;
    border-bottom: 1px solid #c9c9c7;
    position: sticky;
    top: 0;
}
.exit-container {
    height: 20px;
    margin-top: 10px;
}
.close-btn, .restore-btn, .minimize-btn {
    width: 14px;
    height: 14px;
    background-color: cadetblue;
    display: inline-block;
    border-radius: 50%;
    margin-right: 7px;;
}
.close-btn {
    margin-left: 7px;
    background-color: #fb5f57;
    border: 1px solid #e4675f;
}
.restore-btn {
    background-color: #fdbc2f;
    border: 1px solid #e4b045;
}
.minimize-btn {
    background-color: #29c840;
    border: 1px solid #4bba50;
}
.search-container {
    height: 30px;
    margin-top: 20px;
    position: relative;
}
.search {
    width: 100%;
    border-radius: 6px ;
    padding: 4px 0px 4px 30px;
    font-size: 14px;
    background-color: #d3d3d1;
    border: 1px solid #cececc;
    color: #b0b0af;
    letter-spacing: 1.2px;
    font-weight: 100;
}
.search:focus {
    outline: none;
}
.icon-search{
    position: absolute;
    top: 2px;
    left: 6px;
}
.profile-container {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    margin: 15px 0px;
}
.nav-wrapper {
    background-color: #e0e0de;
    padding: 0px 10px;
}
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
.space-divider {
    height: 15px;
}
.icon-profile-image {
    height: 45px;
    widows: 45px;
    border-radius: 50%;
    border: 1px solid #a2a2a2;
}
.profile-name-text {
    color: #444443;
    font-size: 14px;
}
.profile-apple-id {
    color: #686866;
    font-size: 12px;
}
.profile-image-container {
    margin-right: 10px;
    margin-left: 5px;
}
.issue-container {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px;
    margin: 5px 0px 15px 0px;
}
.issue-text {
    font-size: 14px;
    color: #444443;
}
.issue-noti {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #FB3B30;
}
.issue-noti > p {
    color: white;
    font-size: 11px;
    margin-top: 2px;
    margin-left: 6px;
}
.menu-active{
    background-color: #46A1FF;
    border-radius: 6px;
    color: white !important;
}
</style>
