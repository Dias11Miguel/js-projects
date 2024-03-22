const txt = document.getElementById('cs')
const list = document.getElementById('list')

let textn = String(txt.value)
let vet = []

function add (){

textn = String(txt.value)

let d = vet.every(item =>{ 
 
    return item != textn
})

vet.push(textn)

if (d == false){
    window.alert ('Isso ja foi computado')

} else {
    const li =  document.createElement('li')
    list.appendChild(li)
    li.innerHTML = `${textn}`

}




}