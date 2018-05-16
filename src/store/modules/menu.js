import types from '../types.js'
import axios from 'axios'

const state = {
	menulist:[],
}

const getters = {
	menulist(state){
		return state.menulist;
	}
}

const actions = {
	getMenuList({commit,state}){
		axios.get(this._vm.$url + '/api/menu/getMenuAll').then(resp=>{
			//console.log(resp);
			if(resp.data.code == 200){
				commit(types.GET_MENULIST,resp.data.data)
			}
		})
	}
}

const mutations = {
	[types.GET_MENULIST](state,data){
		state.menulist = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}
