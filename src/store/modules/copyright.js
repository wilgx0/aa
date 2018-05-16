import types from '../types.js'
import axios from 'axios'

const state = {
	copyrightShow:false,
}

const getters = {
	copyrightShow(state){
		return state.copyrightShow;
	}
}

const actions = {
	showCopyright({commit}){
		commit(types.COPYRIGHT_SHOW);
	},
	hideCopyright({commit}){
		commit(types.COPYRIGHT_HIDE);
	},
	
}

const mutations = {
	[types.COPYRIGHT_SHOW](state){
       state.copyrightShow= true;
	},
	[types.COPYRIGHT_HIDE](state){
		state.copyrightShow = false;
	},
	
}

export default {
	state,
	getters,
	actions,
	mutations,
}