<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class='newspage' v-show='newspageShow'>
			<mt-header fixed  title="文章">
					<mt-button icon="back" slot='left' @click='hideNewspage'>返回</mt-button>
			</mt-header>
			<div v-html='newspage.news_content' class='content'>
			</div>
		</div>
	</transition>
</template>

<script>
	
	import {mapGetters} from 'vuex'
	import 'animate.css/animate.css'
	
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			...mapGetters(['newspageShow','newspage']),
		},
		methods:{
			hideNewspage(){
				this.$store.dispatch('hideNewspage');
			}
		}
	}
	
	
</script>

<style scoped>
	.newspage{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		overflow: auto;
	}
	.content{
		margin-top:40px;
		padding:10px;
	}
</style>