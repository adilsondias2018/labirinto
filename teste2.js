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
        
     }
     document.getElementById(`linha${linha + 1}`).appendChild(celula)

 }
}

console.log('elemento [8][20]' + map[8][20]);

