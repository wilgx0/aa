import Vue from 'vue'
import Vuex from 'vuex'
//import actions from './actions'
//import getters from './getters'
//import mutations from './mutations'
import menu from './modules/menu'
import plugad from './modules/plugad'
import menuContent from './modules/menuContent'
import trademark from './modules/trademark'
import newslist from './modules/newslist'
import patent from './modules/patent'
import copyright from './modules/copyright'

Vue.use(Vuex)

export default new Vuex.Store({
//	getters,
//	actions,
//	mutations,
	modules:{
		menu,
		plugad,
		menuContent,
		trademark,
		newslist,
		patent,
		copyright,
	}
})
