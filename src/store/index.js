import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex);
const state = {
	user:{},
	events:[]
};
const mutations = {
	signin (state,user_payload){
		state.user = user_payload;
	},
	register(state,user_payload){
		state.user = user_payload;
	},
	logout(state){
		state.user = {};
	},
	setevents(state,events_payload){
		state.events = events_payload;
	}
};
const actions = {
	signin({commit},user_payload){
		commit("signin",user_payload);
	},
	logout({commit}){
		commit("logout");
	},
	setevents({commit},events_payload){
		commit("setevents",events_payload);
	},
};
export default new Vuex.Store({
	state,
	mutations,
	actions
})