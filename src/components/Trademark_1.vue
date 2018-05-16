<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class='trademark-bd' v-show='trademarkShow_1'>
			<mt-header title="商标查询">
				<mt-button icon="back" slot='left' @click='hideTrademark_1'>返回</mt-button>
			</mt-header>

			<div class='trademark1_tab'>
				<img src="../../static/img/img_brand.jpg" alt="" />
			</div>

			<div class='trademark-tab2'>
				<mt-field label="联系电话" placeholder="请输入联系电话" type="tel" v-model="tel" v-validate="'required|phone'" name='联系电话'></mt-field>
				<mt-field label="联系人" placeholder="如：王先生/女士" v-model="userName" v-validate="'required|max:20'" name='联系人'></mt-field>
				<mt-button type="primary" class='trademark-submit' @click='trademarkInsert_1'>短信接收</mt-button>
				<span v-show="errors.any()" v-cloak :class='["error",errorStyle]'>
      				<p v-for="(v,i) in errors.all()">{{v}}</p>
      			</span>
			</div>
		</div>
	</transition>
</template>

<script>
	import { mapGetters } from "vuex";
	import 'animate.css/animate.css'
	import { Toast, MessageBox ,Indicator } from 'mint-ui'

	export default {
		created() {},
		data() {
			return {
				tel: '',
				userName: '',
				errorStyle: '',
			}
		},
		computed: {
			...mapGetters(["trademarkShow_1", "formData"])
		},
		watch:{
			trademarkShow_1(val,oldVal){
				var _this = this;
				if(val == true){
					Object.assign(_this.$data, _this.formData);	
					this.errorStyle='hide';
					setTimeout(function(){
						_this.errors.clear();
						_this.errorStyle='';
					},500)	
				}
			}
		},
		methods: {
			hideTrademark_1() {
				this.$store.dispatch("hideTrademark_1");
			},
			trademarkInsert_1() {
				var _this = this;
				_this.$validator.validateAll().then((result) => {
					if(result) {
						//设置表单数据
						_this.$store.dispatch('setFormData', {
							tel: _this.tel,
							userName: _this.userName,
						});
						//提交表单
						let postData = this.$qs.stringify({
							productName: _this.formData.productName,
							business: _this.formData.business,
							tel: _this.formData.tel,
							userName: _this.formData.userName,
						});
						Indicator.open('加载中...');
						_this.$http({
								method: 'post',
								url: this.$url + '/api/Synthesize/insert_brand',
								data: postData,
						}).then(function(response) {
							if(response.status == 200) {
								var data = response.data;
								if(data.status == 'success' && data.data.code > 0) {
									Indicator.close();
									_this.$store.dispatch('showTrademark_2');
								} else {
									Toast(data.data.msg);
								}

							}
						})
						.catch(function(error) {
							_this.$store.dispatch('showTrademark_2');
							console.log(error);
						})
						
					}
				});

			},
		}
	};
</script>

<style>
	.trademark1_tab {
		height: 315px;
		width: 374px;
		margin: 0 auto;
		padding-top: 15px;
	}
	
	.trademark1_tab>img {
		height: 100%;
		width: 100%;
	}
	.mint-indicator-wrapper{
		z-index:999;
	}
</style>