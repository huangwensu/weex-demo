<template>
    <slider class="slider" auto-play="true" interval="5000" @change="onchange" infinite="false">
        <div class="frame" v-for="img in imageList" :key='img'>
            <image class="image" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>

<script>
    export default {
        props:["imageList"],
        data () {
            return {
            }
        },
        methods: {
            onchange (event) {
            }
        }
    }
</script>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .image {
        width: 750px;
        height: 430px;
        z-index: 9999;
    }
    .slider {
        width: 750px;
        height: 430px;
    }
    .frame {
        width: 750px;
        height: 430px;
        position: relative;
    }
    .indicator {
        width: 750px;
        height: 40px;
        item-color: white;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
</style>