import types from '../types.js'
import axios from 'axios'

const state = {
	trademarkShow:false,
	trademarkShow_1:false,
	trademarkShow_2:false,
	formData:{
		productName: '',
		business: '',
		tel: '',
		userName: '',
	}
}

const getters = {
	trademarkShow(state){
		return state.trademarkShow;
	},
	trademarkShow_1(state){
		return state.trademarkShow_1;
	},
	trademarkShow_2(state){
		return state.trademarkShow_2;
	},
	formData(state){
		return state.formData;
	}
}

const actions = {
	showTrademark({commit}){
		commit(types.TRADEMARKSHOW);
	},
	hideTrademark({commit}){
		commit(types.TRADEMARKHIDE);
	},
	showTrademark_1({commit}){
		commit(types.TRADEMARKSHOW_1);
	},
	hideTrademark_1({commit}){
		commit(types.TRADEMARKHIDE_1);
	},
	showTrademark_2({commit}){
		commit(types.TRADEMARKSHOW_2);
	},
	hideTrademark_2({commit}){
		commit(types.TRADEMARKHIDE_2);
	},
	setFormData({commit},obj){
		commit(types.SET_FORMDATA,obj)
	}
}

const mutations = {
	[types.TRADEMARKSHOW](state){
       state.trademarkShow= true;
	},
	[types.TRADEMARKHIDE](state){
		state.trademarkShow = false;
	},
	[types.TRADEMARKSHOW_1](state){
       state.trademarkShow_1= true;
	},
	[types.TRADEMARKHIDE_1](state){
		state.trademarkShow_1 = false;
	},
	[types.TRADEMARKSHOW_2](state){
       state.trademarkShow_2 = true;
	},
	[types.TRADEMARKHIDE_2](state){
		state.trademarkShow_2 = false;
	},
	[types.SET_FORMDATA](state,obj){
		Object.assign(state.formData, obj);	
//		console.log(obj);
//		console.log(state.formData);
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}