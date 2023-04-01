let pss= document.getElementById('pss')
let fn= document.getElementById('fn')
let ini= document.getElementById('in')
let cd= document.getElementById('ct')
let res= document.getElementById('res')

cd.addEventListener('click',contar)
//cd.addEventListener('mouseenter', mudar)
//cd.addEventListener('mouseout',volta)


function contar(){

    res.innerHTML= ('contando: ')

    i=Number(ini.value)
    f=Number(fn.value)
    p=Number(pss.value)


for(let c=i; c<=f; c+=p){
    res.innerHTML += (`${c} &#8611 `)
}
res.innerHTML+=('fim') 

}


