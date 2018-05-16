<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class='patent-bd' v-show='patentShow'>
			<mt-header title="专利检索">
				<mt-button icon="back" slot='left' @click='hidePatent'>返回</mt-button>
			</mt-header>

			<div class='patent-tab1'>
				<h1>您的专利信息查询</h1>
				<h1 class='patent-tab1-b'>专业专利查询系统</h1>
			</div>

			<hr class='patent-hr'>

			<div class='patent-tab2'>
				<mt-field label="专利名称" placeholder="请输入专利名称" v-model="title" v-validate="'required|max:20'" name='专利名称'></mt-field>
		    	<div class="my-input-checkbox">
			    	<span>
			    		<label><input v-model="patents_type" value="发明专利" type="checkbox">	发明专利</label>
			    	</span>
			        <span>
			        	<label><input v-model="patents_type" value="实用新型专利" type="checkbox">	实用新型专利</label>
			        </span>
  				    <span>
			        	<label><input v-model="patents_type" value="外观专利" type="checkbox">	外观专利</label>
			        </span>
			    </div>
				<mt-field label="联系电话" placeholder="请输入联系电话" type="tel" v-model="tel" v-validate="'required|phone'" name='联系电话'></mt-field>
				<mt-field label="联系人" placeholder="如：王先生/女士" v-model="username" v-validate="'required|max:20'" name='联系人'></mt-field>
				<mt-button type="primary" class='patent-submit' @click='patentInsert'>立即查询</mt-button>
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
				patents_type:[],
				tel: '',
				username: '',
				errorStyle:'',
			}
		},
		computed: {
			...mapGetters(["patentShow"])
		},
		methods: {
			hidePatent() {
				this.$store.dispatch("hidePatent");
			},
			patentInsert() {
				var _this = this;
				_this.$validator.validateAll().then((result) => {
					if(result) {
						let postData = this.$qs.stringify({
							title: this.title,
							type:this.patents_type.join(','),
							tel: this.tel,
							username: this.username,
						});
						this.$http({
							method: 'post',
							url: this.$url + '/api/Synthesize/insert_patents',
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
							//Toast(error);
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
	.patent-bd {
		width: 100%;
		height: 100%;
		background-color: #383a4c;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		overflow: auto;
	}
	
	.patent-tab1 {
		color: #fff;
		font-size: 26px;
		padding-top: 20px;
		text-indent: 20px;
		height: 120px;
	}
	
	.patent-tab1>h1 {
		margin-top: 20px;
	}
	
	.patent-tab1>h1:first-child {
		font-weight: bold;
	}
	
	.patent-tab1-b {
		text-indent: 100px;
	}
	
	.patent-hr {
		width: 90%;
		border: none;
		border-top: 2px ridge #508ed0;
	}
	
	.patent-tab2 {
		width: 90%;
		margin: 20px auto;
	}
	
	.patent-tab2>a {
		margin-top: 10px;
		border-radius: 7px;
	}
	
	.patent-submit {
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