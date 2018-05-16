import types from '../types.js'
import axios from 'axios'

const state = {
	sliderList:[],
}

const getters = {
	sliderList(state){
		return state.sliderList;
	}
}

const actions = {
	getSliderList({commit,state},id){
		axios.get(this._vm.$url + '/api/Index/get_plugad_bytid?id='+id).then(resp=>{
			if(resp.data.code == 200){
				commit(types.GET_SLIDERLIST,resp.data.data)
			}
		})
	}
}

const mutations = {
	[types.GET_SLIDERLIST](state,data){
        //console.log(JSON.stringify(data));
		state.sliderList = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}