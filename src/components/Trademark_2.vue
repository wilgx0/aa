<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class='trademark-bd' v-show='trademarkShow_2'>
			<mt-header title="商标查询">
				<mt-button icon="back" slot='left' @click='hideTrademark_2'>返回</mt-button>
			</mt-header>

			<div class='trademark2_tab'>
				<img src="../../static/img/img_right.png" alt="" />
			</div>


			<div class='trademark-tab2'>
				<mt-button type="primary" class='trademark-submit' @click='zx'>立即咨询</mt-button>
				<mt-button type="primary" class='trademark-submit' @click='bh'>一键拨号</mt-button>
				<mt-button type="primary" class='trademark-submit' @click='back'>返回首页</mt-button>
			</div>

		</div>
	</transition>
</template>

<script>
	import { mapGetters } from "vuex";
	import 'animate.css/animate.css'
	import { Toast, MessageBox } from 'mint-ui'

	export default {
		created() {
		},
		data() {
			return {
			}
		},
		computed: {
			...mapGetters(["trademarkShow_2"])
		},
		methods: {
			hideTrademark_2() {
				this.$store.dispatch("hideTrademark_2");
			},	
			zx(){
				window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=11992060&amp;userId=25561003';
			},
			bh(){
				window.location.href = 'tel:0874-3136868';
			},
			back(){
				this.$store.dispatch('hideTrademark');
				this.$store.dispatch('hideTrademark_1');
				this.$store.dispatch('hideTrademark_2');
				this.$store.dispatch('setFormData', {
					productName: '',
					business: '',
					tel: '',
					userName: '',
				});
			}
		}
	};

</script>

<style>
	.trademark2_tab {
		height: 315px;
		width:260px;
		margin:0 auto;
    	padding-top: 15px;
	}
	.trademark2_tab > img{
		height:100%;
		width:100%;
	}
</style>