let addValue=(num)=>{
    let v=document.getElementById("screen")
    v.innerHTML+=num
    

}
let calValue=()=>{
    let v=document.getElementById("screen")
    let result=eval(v.innerHTML)
    v.innerHTML=result
}
let Allclear=()=>{
    let v=document.getElementById("screen")
    v.innerHTML=" "
}
let del = ()=>{
    let v = document.getElementById('screen');
    v.innerHTML = v.innerHTML.slice(0, -1)
}
