const hospital = require('./hospital_porperty')
const data = require('./hospital_information.json')


let newDatas = []


data.map((item, index) => {
    const { tunnus, orderNum, hospitalName, address, organisaatio } = item
    let newData = new hospital(tunnus, orderNum, hospitalName, address, organisaatio)

    newDatas.push(newData)
})
let hospitalPrivate = []
newDatas.map((item, index) => {
    (item['organisaatio'].toLowerCase().includes('oy')) && (hospitalPrivate.push(item))
})

// now we can find all the private name: 
console.log(hospitalPrivate)

