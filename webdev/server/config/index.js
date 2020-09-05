// const express = require('express')
// const { json } = require('express')
// const app = express()
// app.use(express.json())
// const items = []

// app.listen(3000, function() {
//     console.log('server running on port: 3000')
// })

// app.get('/ping', function(req, res) {
//     res.json({
//         message: 'pong'
//     })
// })

// app.get('/items', function(req, res) {
//     res.json(items)
// })

// let currID = 1
// app.post('/items', function(req, res) {
//     const item = {
//         title: req.body.title,
//         type: req.body.type,
//         completed: false,
//         createdAt: new Date(),
//         id: currID
//     }
//     items.push(item)
//     res.json(item)
//     currID = currID + 1
// })

// app.get('/items/:id', function(req, res) {
//     const id = req.params.id
//     for(let i = 0; i < items.length; i++) {
//         const item = items[i]
//         if (item.id == id) {
//             res.json(items[i])
//             return
//         }
//     }
//     res.status(404).json({})
// })

// app.delete('/items/:id', function(req, res) {
//     const id = req.params.id
//     for(let i = 0; i < items.length; i++) {
//         const item = items[i]
//         if (item.id == id) {
//             res.json(items.splice(i,1))
//             return
//         }
//     }
//     res.status(404).json({})
// })

// items.patch('/:id', function(req, res) {
//     const { id } = req.params
//     const {name, type, completed} = req.body
//     if (id != null) {
        
//     }
// })

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

if (!process.env.NODE_ENV) {
    const config = require('./config.json')
    process.env['MONGO_DB'] = config.MONGO_DB
}

app.use(express.json())
const api = require('../routes/api')
app.use('/api', api)
app.listen(port, function() {
    console.log(`app listening on port ${port}`)
})
