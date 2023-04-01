let hora=document.getElementById('hora')
let dia=document.getElementById('dia')
data=new Date()
let hora1=data.getHours()
let minuto=data.getMinutes()

if(minuto<10){
    hora.innerHTML=(`${hora1}:0${minuto}`)
}else{
hora.innerHTML=(`${hora1}:${minuto}`)
}
if(hora1>5 && hora1<=12){
dia.innerHTML=('bao dia')
}else if(hora1>12 && hora1<=17){
    dia.innerHTML=('ba tarde')
}else if(hora1>17 && hora1<=24){
    dia.innerHTML=('banoite')
}else if(hora1>=00 && hora1<=5){
    dia.innerHTML=('vai dormi, passou da hora já')
}




let res=document.getElementById('res')
let num= document.getElementById('nm')
let tele= document.getElementById('tel')
let name= document.getElementById('nm1')
let rst1=document.getElementById('cdt')
let busca= document.getElementById('bc')
busca.addEventListener('click',cadastrar)
let pesq=document.getElementById('pq')
pesq.addEventListener('click',pesquisar)
let dados=[]

function cadastrar(){

    if(tele.value.length==0 || num.value.length==0){
    window.alert('por favor, preencha todos os campos dispostos')
}else{
    let tel=Number(tele.value)
    let nm= String(num.value)
    dados.push(nm,tel)
    }
}

function pesquisar(){
if(name.value.length==0){
   rst1.innerHTML=('por favor digite um nome acima')
}else{
    rst1.innerHTML=('')
let nm1=String(name.value)
let busca= dados.indexOf(nm1)
if(busca==-1){
    res.innerHTML=('aluno nao encontrado ou não cadastrado')
}else{
    res.innerHTML=(`dado encontrado: ${dados[busca]} <br/>numero: ${dados[busca+1]}`)
}
}

}
