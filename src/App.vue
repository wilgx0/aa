<template>
    <div id="app">
        <div class='head'>
            <a class="lf" href="#"><img src="../static/img/logo.png" alt=""></a>
            <a class="ri a_set" href="">咨询电话：<br>0874-3136868</a>
        </div>
        <v-header></v-header>

        <div class='content'>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!--<div class="advisory" id="advisoryhinden"><a href="http://p.qiao.baidu.com/cps/chat?siteId=11992060&amp;userId=25561003" target="_blank"><img src="../static/img/shangqiao-m.png" alt=""></a></div>-->
        <div class='foot'>
            <div class="foot-hd">
                <a  @click.prevent='about' class="a_line">关于理慧</a>
                <a href="#">联系我们</a>
            </div>
            <div class='foot-bd'>
                <p>曲靖市麒麟区理慧知识产权代理有限公司</p>
                <p>滇ICP备53033495号</p>
            </div>

        </div>
        <div class="footer-scroll">
            <ul class="clearfix">
                <li>
                    <div></div>
                    <a  @click.prevent='about'  class="ic1">关于理慧</a></li>
                <li>
                    <div></div>
                    <a href="tel:0874-3136868" class="ic2">一链拨号</a></li>
                <li>
                    <div></div>
                    <a href="http://p.qiao.baidu.com/cps/chat?siteId=11992060&amp;userId=25561003" target="_blank"
                       class="ic3">在线咨询</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Header from './components/header.vue';

    export default {
        data() {
            return {}
        },
        components: {
            'v-header': Header,
        },
        methods:{
        	about(){
        		this.$router.push('/single/id/33');
        	}
        }

    }
</script>

<style>
    .head {
        font-weight: bold;
        color: #727071;
        background-color: #f0f0f0;
        height: 43px;
        line-height: 43px;
        padding-left: 10px;
        overflow: hidden;
    }

    .head img {
        padding-top: 10px;
    }

    .lf {
        float: left;
    }

    .ri {
        float: right;
    }

    .a_set {
        display: block;
        height: 100%;
        line-height: 20px;
        padding-right: 5px;
        color: #333333;
        font-weight: bold;
        font-size: 14px;
        padding-top: 4px;
    }

    .foot {
        background-color: #2696e5;
        height: 126px;
        width: 100%;
        color: #fff;
    }

    .foot-hd {
        float: left;
        height: 20px;
        text-align: center;
        width: 100%;
        float: left;
        margin-top: 16px;
    }

    .foot-hd a {
        color: #ffffff;
        padding-right: 8px;
        height: 11px;
        display: inline-block;
        line-height: 12px;
        font-size: 14px;
    }

    .a_line {
        border-right: 1px solid #ffffff;
    }

    .foot-bd > p {
        text-align: center;
        line-height: 22px;
    }

    .foot-bd {
        color: #ffffff;
        font-size: 14px;
        float: left;
        height: 60px;
        width: 100%;
    }
    .footer-scroll{
        position: fixed;
        height: 64px;
        bottom: 50px;
        left: 0;
        width: 100%
    }
    .clearfix{
        zoom: 1;
    }
    .footer-scroll li {
        list-style-type: none;
        float: left;
        height: 64px;
        position: relative;
        width: 33.333%;
    }
    .footer-scroll li div {
        position: absolute;
        left: 50%;
        margin-left: -32px;
        top: 0;
        width: 64px;
        height: 64px;
        background-color: #000;
        opacity: 0.6;
        border-radius: 33px;
        z-index: 1;
    }
    .footer-scroll li a {
        position: absolute;
        left: 50%;
        margin-left: -32px;
        top: 0;
        width: 64px;
        height: 64px;
        display: block;
        padding-top: 35px;
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        color: #fff;
        z-index: 2;
    }
    .ic1{
        background: url("../static/img/home.png") no-repeat;
        background-position-x: 20px;
        background-position-y: 10px;

    }
    .ic2{
        background: url("../static/img/phone.png") no-repeat;
        background-position-x: 20px;
        background-position-y: 10px;

    }
    .ic3{
        background: url("../static/img/duanxin.png") no-repeat;
        background-position-x: 20px;
        background-position-y: 10px;

    }
    .footer-scroll li.ic1 a {
        background-position: 23px 9px;
    }

    .advisory{
        position: fixed;
        top: 60%;
        right: 2%;
        z-index: 999;
        border-radius: 5px;
    }
</style>