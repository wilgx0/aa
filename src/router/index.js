import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Single from '../components/Single.vue'
import store from '../store/index.js'




Vue.use(VueRouter);
export default new VueRouter({
	routes:[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/single/id/:id',
			component:Single,
			beforeEnter: function (to, from, next) {   //进入路由前
				store.dispatch('getMenuContent', to.params.id);
				next();
			}
		},
		{
			path:'*',
			redirect:'/home',
		}
	],
	linkActiveClass:'active'
})
