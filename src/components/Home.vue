<template>
    <div id="home">
        <!--幻灯片-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(v,i) in sliderList" :key="i">
                <a :href="v.plug_ad_url" class='sliderimg'>
                    <img :src="$url + v.plug_ad_pic">
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <div @click='showTrademark()' class='search trademarkSearch'>
            <a href="#"><img src="../../static/img/shangbiao.png" alt=""></a>
            <h1 >商标查询</h1>
            <p><img src="../../static/img/TrademarkInquiry.png" alt=""></p>
        </div>

        <div @click='showPatent()' class='search patentSearch'>
            <a href="#"><img src="../../static/img/zhuanli.png" alt=""></a>
            <h1 >专利检索</h1>
            <p><img src="../../static/img/PatentInquiry.png" alt=""></p>
        </div>

        <div @click='showCopyright()' class='search copyrightSearch'>
            <a href="#"><img src="../../static/img/banquan.png" alt=""></a>
            <h1 >版权信息</h1>
            <p><img src="../../static/img/CopyrightInformation.png" alt=""></p>
        </div>


        <!--商标查询-->
        <Trademark></Trademark>

        <!--专利查询-->
        <Patent></Patent>

        <!--版权查询-->
        <Copyright></Copyright>

        <!--成功案例-->
        <mt-navbar v-model="selected" class='header-navbar my-navbar'>
            <mt-tab-item id="1" checked>成功案例</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul class='home-case'>
                    <li>
                        <a href=""><img src="../../static/img/su-1.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../../static/img/su-2.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../../static/img/su-3.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../../static/img/su-4.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../../static/img/su-5.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../../static/img/su-6.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../../static/img/su-7.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../../static/img/su-8.png" alt=""></a>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>

    import {mapGetters} from "vuex"
    import Trademark from "./Trademark.vue"
    import Patent from './Patent.vue'
    import Copyright from './Copyright.vue'
    //import NewsList from './NewsList.vue'


    export default {
        data() {
            return {
                selected: "1",
            };
        },
        methods: {
            showTrademark() {
                this.$store.dispatch("showTrademark");
            },
//  showNewsList(){
//  	this.$store.dispatch("showNewsList");
//  },
            showPatent() {
                this.$store.dispatch("showPatent");
            },
            showCopyright() {
                this.$store.dispatch('showCopyright');
            }
        },
        created() {
            this.$store.dispatch("getSliderList", 1);
        },
        computed: {
            ...mapGetters(["sliderList"])
        },
        components: {
            Trademark,
//  NewsList,
            Patent,
            Copyright,
        }
    };
</script>

<style>
    .mint-swipe-items-wrap {
        height: 180px;
    }

    .sliderimg {
        display: block;
        height: 180px;
        width: 100%;
    }

    .sliderimg > img {
        width: 100%;
        height: 100%;
    }

    .search {
        position: relative;
        margin: 5px 0;
        height: 80px;
    }

    .search > h1 {
        position: absolute;
        height: 50px;
        color: #fff;
        font-size: 24px;
        display: inline-block;
        left: 41%;
        top: 18px;
        letter-spacing: 4px;
    }

    .search a {
        position: absolute;
        top: 16px;
        left: 26%;
    }

    .search p {
        position: absolute;
        top: 43px;
        left: 41.5%;
    }

    .trademarkSearch {
        background-color: #3acfcd;
    }

    .patentSearch {
        background-color: #fab366;
    }

    .copyrightSearch {
        background-color: #29c971;
    }

    .header-navbar {
        margin-bottom: 15px;
    }

    .home-case {
        padding-left: 8px;
        width: 100%;
    }

    .home-case > li {
        display: inline-block;
        margin: 2px 10px;
        width: 17%;
    }
    .home-case li img{
        width: 100%;
        height: 100%;
    }

    .my-navbar {
        background-color: #26a2ff;
    }

    .my-navbar .mint-tab-item {
        color: #fff !important;
        border-bottom: 0;

    }

    .my-navbar .mint-tab-item-label {
        line-height: 0;
        text-align: left;
        padding-left: 10px;
        font-size: 14px;
    }
</style>