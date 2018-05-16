import types from '../types.js'
import axios from 'axios'

const state = {
	patentShow:false,
}

const getters = {
	patentShow(state){
		return state.patentShow;
	}
}

const actions = {
	showPatent({commit}){
		commit(types.PATENT_SHOW);
	},
	hidePatent({commit}){
		commit(types.PATENT_HIDE);
	},
	
}

const mutations = {
	[types.PATENT_SHOW](state){
       state.patentShow= true;
	},
	[types.PATENT_HIDE](state){
		state.patentShow = false;
	},
	
}

export default {
	state,
	getters,
	actions,
	mutations,
}