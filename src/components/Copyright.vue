<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class='copyright-bd' v-show='copyrightShow'>
			<mt-header title="版权信息">
				<mt-button icon="back" slot='left' @click='hideCopyright'>返回</mt-button>
			</mt-header>

			<div class='copyright-tab1'>
				<h1>您的版权信息查询</h1>
				<h1 class='copyright-tab1-b'>专业专利查询系统</h1>
			</div>

			<hr class='copyright-hr'>

			<div class='copyright-tab2'>
				<mt-field label="作品类别" placeholder="请输入作品类型、如小说" v-model="title" v-validate="'required|max:20'" name='作品类别'></mt-field>
				<mt-field label="联系电话" placeholder="请输入联系电话" type="tel" v-model="tel" v-validate="'required|phone'" name='联系电话'></mt-field>
				<mt-field label="联系人" placeholder="如：王先生/女士" v-model="username" v-validate="'required|max:20'" name='联系人'></mt-field>
				<mt-button type="primary" class='copyright-submit' @click='copyrightInsert'>立即查询</mt-button>
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
	import { Toast, MessageBox } from 'mint-ui'

	export default {
		created() {
			this.defaultData = JSON.parse(JSON.stringify(this.$data));
		},
		data() {
			return {
				title: '',
				tel: '',
				username: '',
				errorStyle:'',
			}
		},
		computed: {
			...mapGetters(["copyrightShow"])
		},
		methods: {
			hideCopyright() {
				this.$store.dispatch("hideCopyright");
			},
			copyrightInsert() {
				var _this = this;
				_this.$validator.validateAll().then((result) => {
					if(result) {
						let postData = this.$qs.stringify({
							title: this.title,
							tel: this.tel,
							username: this.username,
						});
						this.$http({
							method: 'post',
							url: this.$url + '/api/Synthesize/insert_copyright',
							data: postData,
						}).then(function(response) {
							if(response.status == 200) {
								var data = response.data;
								if(data.status == 'success') {
									Object.assign(_this.$data, _this.defaultData);
									MessageBox('提示', '提交成功,请等待工作人员联系!')
									_this.errorStyle='hide';
									setTimeout(function(){
										_this.errors.clear();
										_this.errorStyle='';
									},500)		
								} else {
									Toast(data.data.msg);
								}

							}
						}).catch(function(error) {
							MessageBox('提示', '提交成功,请等待工作人员联系!')	
							//Toast('操作失败请刷新重试!');
							console.log(error);
						})
					}
				});

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
	.copyright-bd {
		width: 100%;
		height: 100%;
		background-color: #383a4c;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		overflow: auto;
	}
	
	.copyright-tab1 {
		color: #fff;
		font-size: 26px;
		padding-top: 20px;
		text-indent: 20px;
		height: 120px;
	}
	
	.copyright-tab1>h1 {
		margin-top: 20px;
	}
	
	.copyright-tab1>h1:first-child {
		font-weight: bold;
	}
	
	.copyright-tab1-b {
		text-indent: 100px;
	}
	
	.copyright-hr {
		width: 90%;
		border: none;
		border-top: 2px ridge #508ed0;
	}
	
	.copyright-tab2 {
		width: 90%;
		margin: 20px auto;
	}
	
	.copyright-tab2>a {
		margin-top: 10px;
		border-radius: 7px;
	}
	
	.copyright-submit {
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
	
	
	.my-input-checkbox{
		color:#FFFFFF;
	    padding-left: 19px;
	    margin-top: 10px;
	}
	.my-input-checkbox span{
		padding-right: 10px;
	}
	.hide{
		display:none;
	}
</style>