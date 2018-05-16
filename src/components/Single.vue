<template>
	<div v-html='menuContent.menu_content' @click='showPage($event)'>	
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		created(){
			
		},
		mounted(){		
		},
		computed:{
			...mapGetters([
				'menuContent',
			]),
		},
		methods:{
			showPage(e){			//路由到首页表单
				var str = e.target.getAttribute('data-jump');
				if(str){
					this.$store.dispatch(str);	
					this.$router.push('/home');
				}			
			}
		},
		beforeRouteUpdate(to,from,next){
			this.$store.dispatch('getMenuContent',to.params.id);
			next();
		}
	}
</script>

<style>
img{
	width:100% !important;
}

</style>