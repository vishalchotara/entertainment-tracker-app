import {defaultState} from './state'

const resetState = function(state) {
    Object.assign(state, defaultState())
}

const setItems = function (state, payload) {
    state.items = payload
}

const setFilters = function (state, payload) {
    state.filters = payload
}

const setFilter = function (state, payload) {
    if (payload > -1 && payload < state.filters.length) {
        state.selectedFilter = payload
    }
}

const setTypes = function (state, payload) {
    state.types = payload
}

const setType = function (state, payload) {
    if (payload >= 0 && payload < state.types.length) {
        state.selectedType = payload
    }
}
export const mutations = {
    resetState,
    setItems,
    setFilters,
    setFilter,
    setTypes,
    setType
}