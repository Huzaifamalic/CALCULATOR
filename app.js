let getinp = document.querySelector('#inp')

let btn = (e)=>{
getinp.value += e

}
let answer = ()=>{
    getinp.value = eval(getinp.value)
}
let celer= ()=>{
getinp.value = ""
}
let ac=()=>{
    getinp.value = ""
}
let del =()=>{
let dlvalue = getinp.value
if(dlvalue.length > 0){
    getinp.value = dlvalue.slice(0, -1)
}
}