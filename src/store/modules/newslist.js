import types from '../types.js'
import axios from 'axios'

const state = {
	newslistShow:false,
	newslist:[],
	lastpage:0,
	newspageShow:false,
	newspage:{},
}

const getters = {
	newsListShow(state){
		return state.newslistShow;
	},
	newslist(state){
		return state.newslist;
	},
	newsLastpage(state){
		return state.lastpage;
	},
	newspageShow(state){
		return state.newspageShow;
	},
	newspage(state){
		return state.newspage;
	}
	
}

const actions = {
	showNewsList({commit}){
		commit(types.SHOWNEWSLIST);
	},
	hideNewsList({commit}){
		commit(types.HIDENEWSLIST);
	},
	getNewsList({commit},page){
		axios.get(this._vm.$url + '/api/Newslist/get_newslist?page='+page).then(resp=>{
			if(resp.data.code == 200){
				commit(types.GET_NEWSLIST,resp.data.data)
			}
		})
	},
	showNewspage({commit},id){
		axios.get(this._vm.$url + '/api/Newslist/get_newspage?id='+ id).then(resp=>{
			if(resp.data.code == 200){
				commit(types.GET_NEWSPAGE,resp.data.data)
			}
		})
	},
	hideNewspage({commit}){
		commit(types.HIDENEWSPAGE);
	}
	
}

const mutations = {
	[types.SHOWNEWSLIST](state){
       state.newslistShow= true;
	},
	[types.HIDENEWSLIST](state){
		state.newslistShow = false;
	},
	[types.GET_NEWSLIST](state,data){
		state.newslist = state.newslist.concat(data.data);
		state.lastpage = data.last_page;
		//console.log(data);
	},
	[types.GET_NEWSPAGE](state,data){
		//console.log(data);
		state.newspage = data;
		state.newspageShow = true;
	},
	[types.HIDENEWSPAGE](state){
		state.newspageShow = false;
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}