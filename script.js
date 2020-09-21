const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];




for(let linha = 0; linha< map.length; linha++){

 let linhaPalco = document.createElement('div')
 linhaPalco.className = 'linha'
 linhaPalco.id = `linha${linha + 1}`
 document.getElementById('jogo').appendChild(linhaPalco)


 for ( let coluna = 0; coluna < map[linha].length; coluna++){
     
    let celula = document.createElement('div')

     if (map[linha][coluna] === 'W'){
        
        celula.className = 'parede'
    
     }else if( map[linha][coluna] === ' ' ||  map[linha][coluna] === 'S' ||  map[linha][coluna] === 'F'){
         celula.className = 'piso'
     }
     celula.classList.add(`celula${coluna + 1}`)

     if( map[linha][coluna] === 'S'){
         celula.id = 'start'
         let img = document.createElement('img')
         img.id = 'jogador'         
         img.src = './img/jogador1.png'
         celula.appendChild(img)

     }

     if(map[linha][coluna] === 'F'){  
         
        celula.id = 'finish'
        let img = document.createElement('img')
        img.id = 'jogaorVence'
        img.src = './img/vencedor.png'
     
     }
     document.getElementById(`linha${linha + 1}`).appendChild(celula)

 }
}

let jogador = document.getElementById('jogador')
// pega a celula na qual o jogador e filho
let celula = jogador.parentElement 
// pega linha na qual a celula é filha.
let linha = celula.parentElement 

document.addEventListener('keydown', (e) =>{

// recebendo o que foi digitado pelo jogador
const teclapressionada = e.key

if(teclapressionada ==='ArrowUp'){
    if(linha.previousSibling !== null){
        linha = linha.previousSibling
    }
    let posicaoAtual = celula.classList[1]
    let posicaoFilha = linha.childNodes

     
    // console.log(linha);
    // console.log(posicaoAtual);
    // console.log(posicaoFilha);

    for( let i = 0; i< posicaoFilha.length; i++){
       
        // let valorAtual = posicaoFilha[i].classList.contains(posicaoAtual) 
        // let piso = posicaoFilha[i].classList.contains('piso')

        if(posicaoFilha[i].classList.contains(posicaoAtual)){
        if( posicaoFilha[i].classList.contains('piso')){
            
                celula = posicaoFilha[i]
            }else{
               linha = linha.nextSibling            
        }
        }

        // console.log("Filha" + posicaoFilha[i].classList.contains(posicaoAtual));
        // console.log("Atual" + posicaoAtual);
    }

    celula.appendChild(jogador)
}else if( teclapressionada === 'ArrowLeft'){

    if(celula.previousSibling === null){
        
        console.log('movimento invalido')
    }else if(celula.previousSibling.classList.contains('piso')){
        celula = celula.previousSibling
        celula.appendChild(jogador)
    }
}else if( teclapressionada === 'ArrowRight'){
    
    if(celula.nextSibling === null ){
    console.log('movimento invalido');
   }else if(celula.nextSibling.classList.contains('piso')){
       
    celula = celula.nextSibling
    celula.appendChild(jogador)
   }
}else if(teclapressionada === 'ArrowDown'){
    if( linha.nextSibling !== null){
        linha = linha.nextSibling
    }

    let posicaoAtual = celula.classList[1]
    let posicaoFilha = linha.childNodes
    for(let i = 0; i< posicaoFilha.length; i++){
        if(posicaoFilha[i].classList.contains(posicaoAtual)){
        if(posicaoFilha[i].classList.contains('piso')){

            celula = posicaoFilha[i]
        }else{

            linha = linha.previousSibling
        }
        }


    }
    celula.appendChild(jogador)
}else{

    let posicaoAtual = celula.classList[1]
    let posicaoFilha = linha.childNodes
    for(let i = 0; i< posicaoFilha.length; i++){
        if(posicaoFilha[i].classList.contains(posicaoAtual)){
        if(posicaoFilha[i].classList.contains('finish')){

            celula = posicaoFilha[i]
        }else{

            linha = linha.previousSibling
        }
        }


    }
    celula.appendChild(jogador) 
}

verificaVencedor()

})

let p = document.createElement('p')

function verificaVencedor(){

    if(jogador.parentElement.id === 'finish'){
              
        document.getElementById('mensagem').classList.remove('hide')         

    }
    reiniciar = document.querySelector('button')

    reiniciar.addEventListener('click', reiniciarJogo)

}

function reiniciarJogo(){
    
    window.location.reload()
}





// pergutnas 
/**
 * Qual a diferenca entre elementSibiling e Sibiling
 * 
 */