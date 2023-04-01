let hr=document.getElementById('hr')

let data= new Date
let hora=data.getHours()
let minuto= data.getMinutes()

if(minuto<10){
hr.innerHTML=(`${hora}:0${minuto}`)
}else{hr.innerHTML=(`${hora}:${minuto}`)}

let img= document.getElementById('img')
let msg=document.getElementById('msg')

if(hora>5 && hora<=11){
    img.src="paisagem manhã.jpg"
    msg.innerHTML=('bom dia') 
    document.body.style.backgroundImage='linear-gradient(to right, #E3F0F6, #6D8A9C, #334B63 )'

}else if(hora>11 && hora<=18){
    msg.innerHTML=('boa tarde')
    img.src="paisagem tarde.jpg"
    document.body.style.backgroundImage="linear-gradient(to right, #C68660, #B9A09C )"
   
}else if(hora>18 && hora<=23){
    img.src="paisagem noite.jpg"
    msg.innerHTML=('boa noite')
    document.body.style.backgroundImage="linear-gradient(to right, #334B63, #3C5D6C, #92D6E1 )"

}else if(hora>00 && hora<=5){
    msg.innerHTML=('vai dormir')
    img.src='madrugada.jpg'
    document.body.style.backgroundImage="linear-gradient(to right, #1C1F24, #0B3D44 )"
    
    
}