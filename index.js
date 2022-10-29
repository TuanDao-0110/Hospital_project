const hospital = require('./hospital_class_porperty')
const data = require('./hospital_information.json')

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

//   2.1 now we can see all the private name: 
console.log(hospitalPrivate)

