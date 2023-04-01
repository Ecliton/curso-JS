var hora=document.getElementById('hr')
var data=new Date()
var hr= data. getHours()
var minuto= data.getMinutes()

if(minuto<10){
hora.innerHTML=(`${hr}:0${minuto}`)
}else{
    hora.innerHTML=(`${hr}:${minuto}`)
}

if(hr>5 && hr<=11){

    document.body.style.background='#DEF0F2'

}else if(hr>11 && hr<=18){

    document.body.style.background= "#db9e7c"
   
}else if(hr>18 && hr<=23){

    document.body.style.background="#063c46"

}else if(hr>00 && hr<=5){

    document.body.style.background='#14242a'
    
}


function clicar(){
    
    let ini=document.getElementById('in')
    let fn=document.getElementById('fn')
    let pass=document.getElementById('pss')
    let res=document.getElementById('res')
    
    if(ini.value.length==0 || fn.value.length==0 || pass.value.length==0){
        res.innerHTML=('preencha todos os dados')
    }else{
    res.innerHTML=('contando: ')

    i=Number(ini.value)
    f=Number(fn.value)
    p=Number(pass.value)

    for(let c=i; c<=f; c+=p){
        res.innerHTML+=`${c} &#x1F61B`
    }
    res.innerHTML+=(`fim`)

}
}

