
const findListHospitalName = (tunnus, arr) => {
    let list = []
    arr.map((item, index) => {
        
        if (item.name.toLowerCase().includes(tunnus.toLowerCase())) {
            list.push(item)
        }
    })
    return list
}

module.exports = findListHospitalName