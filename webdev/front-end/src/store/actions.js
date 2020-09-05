import server from './../driver'

const getMetaData = function (context) {
    const {commit} = context
    return server.meta()
    .then(function (data) {
        commit('setFilters', data.filters)
        commit('setTypes', data.types)
    })
    .catch(function(error){
        return error
    }) 
}
const getItems = function(context) {
    const {commit,state} = context
    if (state.filters.length == 0 || state.types.length == 0) {
        throw new Error("no items to get")
    }
    const filter = state.filters[state.selectedFilter]
    const type = state.types[state.selectedType]
    return server.getAllItems(type, filter)
    .then(function(items) {
        commit('setItems', items)
    })
    .catch(function(error) {
        return error
    })
}
const getItem = function(context,payload) {
    return server.getItemById(payload)
    .then (function(data) {
        return data
    })
    .catch(function(error) {
        return error
    })
}
const deleteItem = function(context, id) {
    const {dipatch} = context
    return server.deleteItem(id)
    .then(function() {
        return dispatch('getItems')
    })
    .catch(function(error) {
        return error
    })
}
const addItem = function (context, payload) {
    const {dispatch} = context
    const {name,type, completed} = payload
    return server.addItem(name,type,completed)
    .then(function() {
        dispatch('getItems')
    })
    .catch(function(error) {
        return error
    })
}
const patchItem = function(context, payload) {
    const {dispatch} = context
    const {id, name, type, completed} = payload
    return server.patchItem(id,name,type,completed)
    .then(function() {
        return dispatch('getItems')
    })
    .catch(function(error) {
        return error
    })
}
const init = function(context) {
    const{commit,dispatch} = context
    return dispatch('getMetaData')
    .then(function() {
        return dispatch('getItems')
    })
    .catch(function(){
        commit('resetState')
    })
}
export const actions = {
    getMetaData,
    getItems,
    getItem,
    deleteItem,
    addItem,
    patchItem,
    init
}