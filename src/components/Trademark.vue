<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class='trademark-bd' v-show='trademarkShow'>
			<mt-header title="商标查询">
				<mt-button icon="back" slot='left' @click='hideTrademark'>返回</mt-button>
			</mt-header>

			<div class='trademark-tab1'>
				<h1>你的商标信息查询</h1>
				<h1 class='trademark-tab1-b'>专业商标查询系统</h1>
			</div>

			<hr class='trademark-hr'>

			<div class='trademark-tab2'>
				<mt-field label="商品名称" placeholder="请输入商品名称" v-model="productName" v-validate="'required|max:20'" name='商品名称'></mt-field>
				<mt-field label="所属行业" placeholder="请输入所属行业" v-model="business" v-validate="'required|max:20'" name='所属行业'></mt-field>
				<!--<mt-field label="联系电话" placeholder="请输入联系电话" type="tel" v-model="tel" v-validate="'required|phone'" name='联系电话'></mt-field>
				<mt-field label="联系人" placeholder="如：王先生/女士" v-model="userName" v-validate="'required|max:20'" name='联系人'></mt-field>-->
				<mt-button type="primary" class='trademark-submit' @click='trademarkInsert'>立即查询</mt-button>
				<span v-show="errors.any()" v-cloak :class='["error",errorStyle]'>
      				<p v-for="(v,i) in errors.all()">{{v}}</p>
      			</span>
			</div>
			<!--第二个页面-->
		 	<Trademark_1></Trademark_1>
		 	<!--第三个页面-->
		 	<Trademark_2></Trademark_2>
		</div>
	</transition>
</template>

<script>
	import { mapGetters } from "vuex";
	import 'animate.css/animate.css'
	import { Toast, MessageBox } from 'mint-ui'
	import Trademark_1 from './Trademark_1.vue'
	import Trademark_2 from './Trademark_2.vue'

	export default {
		created() {
			//this.defaultData = JSON.parse(JSON.stringify(this.$data));
		},
		data() {
			return {
				productName: '',
				business: '',
//				tel: '',
//				userName: '',
				errorStyle:'',
			}
		},
		computed: {
			...mapGetters(["trademarkShow","formData"])
		},
		watch:{
			trademarkShow(val,oldVal){
				var _this = this;
				if(val == true){
					Object.assign(_this.$data, _this.formData);	
					_this.errorStyle='hide';
					setTimeout(function(){
						_this.errors.clear();
						_this.errorStyle='';
					},500)	
				}
			}
		},
		components:{
			Trademark_1,
			Trademark_2,
		},
		methods: {
			hideTrademark() {
				this.$store.dispatch("hideTrademark");
			},
			trademarkInsert() {
			    var _this = this;
				_this.$validator.validateAll().then((result) => {
					if(result) {
						_this.$store.dispatch('setFormData',{
							productName: _this.productName,
							business: _this.business,
						});
						_this.$store.dispatch('showTrademark_1');		
					}
				});
				
				
//				var _this = this;
//				_this.$validator.validateAll().then((result) => {
//					if(result) {
//						let postData = this.$qs.stringify({
//							productName: this.productName,
//							business: this.business,
//							tel: this.tel,
//							userName: this.userName,
//						});
//						this.$http({
//							method: 'post',
//							url: this.$url + '/api/Synthesize/insert_brand',
//							data: postData,
//						}).then(function(response) {
//							if(response.status == 200) {
//								var data = response.data;
//								if(data.status == 'success') {									
//									Object.assign(_this.$data, _this.defaultData);								
//									MessageBox('提示', '提交成功,请等待工作人员联系!')
//									_this.errorStyle='hide';
//									setTimeout(function(){
//										_this.errors.clear();
//										_this.errorStyle='';
//									},500)								
//								} else {
//									Toast(data.data.msg);
//								}
//
//							}
//						})
//						.catch(function(error) {
//							MessageBox('提示', '提交成功,请等待工作人员联系!')					
//							console.log(error);
//						})
//					
//						
//					}
//				});
			
			},
		}
	};

</script>

<style>
	.mint-header{
		background-color:#f0f0f0;
		color:#727071;
		height:43px;
	}
	.trademark-bd {
		width: 100%;
		height: 100%;
		background-color: #383a4c;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		overflow: auto;
	}

	.trademark-tab1 {
		color: #fff;
		font-size: 26px;
		padding-top: 20px;
		text-indent: 20px;
		height: 120px;
	}

	.trademark-tab1>h1 {
		margin-top: 20px;
	}

	.trademark-tab1>h1:first-child {
		font-weight: bold;
	}

	.trademark-tab1-b {
		text-indent: 100px;
	}

	.trademark-hr {
		width: 90%;
		border: none;
		border-top: 2px ridge #508ed0;
	}

	.trademark-tab2 {
		width: 90%;
		margin: 20px auto;
	}

	.trademark-tab2>a {
		margin-top: 10px;
		border-radius: 7px;
	}

	.trademark-submit {
		display: block;
		width: 70%;
		margin: 10px auto;
	}

	.error {
		color: red;
	}

	.error > p {
		margin-top: 10px;
		text-align: center;
	}
	
	.hide{
		display:none;
	}
</style>