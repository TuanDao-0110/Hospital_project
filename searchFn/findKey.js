


const findListHospitalID = (tunnus, arr) => {
    let list = []
    arr.map((item, index) => {
        if (item.tunnus === tunnus) {
            list.push(item)
        }
    })
    return list
}

module.exports = findListHospitalID