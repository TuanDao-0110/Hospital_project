const hospital = require('./hospital_class_porperty')
const data = require('./hospital_information.json')
const http = require('http')
const port = 8080;
// 1. create newData with only data we need
let newDatas = []


data.map((item, index) => {
    const { tunnus, orderNum, hospitalName, address, organisaatio } = item
    let newData = new hospital(tunnus, orderNum, hospitalName, address, organisaatio)

    newDatas.push(newData)
})

// 2. find data with only private hospital
let hospitalPrivate = []
newDatas.map((item, index) => {
    (item['organisaatio'].toLowerCase().includes('oy')) && (hospitalPrivate.push(item))
})

//   2.1 now we can send data all the private name: 

const server = http.createServer((req, res) => {

    const newUrl = new URL(`http://${req.headers.host}${req.url}`)
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({ status: 200, msg: 'success', hospitalPrivate }))
})
server.listen(port, () => {
    console.log(`listening on port : ${port}.....`)
})