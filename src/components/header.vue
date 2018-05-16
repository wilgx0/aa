<template>
	<div>
		<ul class='header'>
			<li v-for='(v,i) in menulist' v-bind:key='i'>
				<router-link :to='getNavLink(v)'>
				{{v.menu_name}}
				</router-link>
			</li>
		</ul>	
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		created(){
			this.$store.dispatch('getMenuList');
		},
		computed:{
			...mapGetters([
				'menulist',
			]),
		},
		methods:{
			getNavLink(data){
				if(data.menu_type == 2){
					return data.menu_address;
				} else if(data.menu_type == 4){
					return '/single/id/' + data.id;
				}
			}
		}
	}
</script>

<style scoped>
	.header{
		
		display: flex;
		padding:0px;
		margin: 0px;
		background:url(../../static/img/nav_bg.png) repeat-x;
	}
	.header > li{
	    list-style: none;
		flex:1;
		height: 32px;
		text-align: center;
		line-height:32px;
		
	}
	.header > li >a {
		text-decoration: none;
		color:#fff;
		font-size:14px;
		font-weight:bold;
		display:block;
		height:30px;
	}
	.active{
	    border-top: 2px solid #9cd70e;
	    background: #52b1dd;
	}
</style>