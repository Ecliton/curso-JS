let num= [5,8,2,9,3]

/* 'let[3]= 6' adicionaum valor em um 
local especifico do array*/

/* 'let push(6)' adiciona um valor 
na ultima posição do array*/

console.log ( `nosso vetor é o ${num}`)

let pos= num.indexOf(4) //procura um valor dentro do array
if(pos==-1){
    console.log('o valor nao existe')
}else{
    console.log(`o valor está na posição ${pos}`)}
