const txt = window.document.getElementById('er')
const res = window.document.getElementById('eae')
const o = window.document.getElementById('oi')


let strig = Number(txt.value)
let array = []


function ok(){

strig = Number(txt.value)
array = [strig]




for (let i = 0 ; i < array ; i++ ) {

    res.innerHTML  += i
}

o.innerHTML = array

}




