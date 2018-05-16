import types from '../types.js'
import axios from 'axios'

const state = {
	MenuContent:{},
}

const getters = {
	menuContent(state){
		return state.MenuContent;
	}
}

const actions = {
	getMenuContent({commit,state},id) {			//首页导航获取单页栏目数据
        axios.get(this._vm.$url + '/api/Menu/get_menu_content_byid?id='+id).then(resp=>{
			if(resp.data.code == 200){
				 //添加域名 s
//				 var str = resp.data.data.menu_content
//				 var reg = new RegExp(/src=['"](.*?)['"]/,'gi')
//				 resp.data.data.menu_content = str.replace(reg,'src="'+ this._vm.$url +'$1"')
				 //添加域名 e
				commit(types.GET_MENUCONTENT,resp.data.data)
			}
		})
    }
}

const mutations = {
	[types.GET_MENUCONTENT](state,data){
		state.MenuContent = data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
}