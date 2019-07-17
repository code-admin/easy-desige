<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
body, button, input, select, textarea {
    font: 12px Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
}
#app {
    height: 100%;
    overflow: hidden;
    color: #1C4B82;
    font-size: 12px;
    /* background: #f5f5f5; */
}
</style>
