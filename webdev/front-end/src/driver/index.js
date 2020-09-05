import {create} from 'axios'

const endpoints = require('./api.json')

class ServerAPI {
    constructor() {
        const port = process.env.PORT || 3000
        const domain = process.env.URL || `http://localhost:${port}`
        this.url = `${domain}/api`
        this.request = create({ 
            baseURL: this.url,
            validateStatus: function (status) {
                return status > 0
            }
        })
    }

    meta () {
        const {method, url} = endpoints['api']['items']['meta']
        return this.makeRequest(method, url)
    }
    getItemById(id) {
        const {method, url} = endpoints['api']['items']['getItemById']
        const urlWithParams = this.paramify(url, {':id': id})
        return this.makeRequest(method, urlWithParams)
    }
    getAllItems(type, filter) {
        const {method, url} = endpoints['api']['items']['getAllItems']
        const urlWithParams = this.paramify(url, {':type': type, ':filter': filter})
        return this.makeRequest(method, urlWithParams)
    }
    addItem(name, type, completed) {
        const data = {name, type, completed}
        const {method, url} = endpoints['api']['items']['addItem']
        return this.makeRequest(method, url, data)
    }
    deleteItem (id) {
        const {method, url} = endpoints['api']['items']['deleteItem']
        const urlWithParams = this.paramify(url, {':id': id})
        return this.makeRequest(method, urlWithParams)
    }
    patchItem(id, name, type, completed) {
        const data = {
            name, type, completed
        }
        const {method, url} = endpoints['api']['items']['patchItem']
        const urlWithParams = this.paramify(url, {':id': id})
        return this.makeRequest(method, urlWithParams, data)
    }
    paramify(url, params) {
        const keys = Object.keys(params)
        for (let key of keys) {
            url = url.replace(key, params[key])
        }
        return url
    }
    handleError(error){
        console.log(error)
        return error.message
    }
    makeRequest(method, url,body) {
        return this.request[method](url,body)
        .then(function(response) {
            return Promise.resolve(response.data)
        })
        .catch(function(e) {
            return Promise.reject(e)
        })
    }
}
export default new ServerAPI()