import Vuex from 'vuex'
import Vue from 'vue'
import {mutations} from './mutations'
import {actions} from './actions'
import {defaultState} from './state'

Vue.use(Vuex)
const store = new Vuex.store({
    state: defaultState(),
    mutations,
    actions
})
export default store