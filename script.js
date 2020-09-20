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
    "WWWWWWWWWWWWWWWWWWWWW",
];



// let resultado = map.map(function(e){

    
//     if( e === 'w'){

//      e = 'tijolo'

//      return console.log(e);

//     }
// })


for( let i = 0 ; map.length; i++){

    console.log('linha' + map[i]);
    for( let j = 0; map.length; j++){

        console.log('coluna'[0][0])
    }

    console.log(map.length)
}


let resultado = map.map(function(valor, inde e){

    return console()
  
})





// for (let i = 0; i < map.length; i++) {
//     let outerCell = document.createElement('div')
//     outerCell.className = 'line'
//     outerCell.id = `line${i+1}`
//     document.getElementById('game').appendChild(outerCell)

//     for (let j = 0; j < map[i].length; j ++) {
//         let cell = document.createElement('div')
//         if (map[i][j] === 'W') {
//             cell.className = 'wall'
//         } else if(map[i][j] === ' ' || map[i][j] === 'S' || map[i][j] === 'F') {
//             cell.className = 'floor'
//         }
//         cell.classList.add(`column${j+1}`)
        
//         if (map[i][j] === 'S') {
//             cell.id = 'start'
//             let img = document.createElement('img')
//             img.id = 'player'
//             img.src = './src/peao.png'
//             cell.appendChild(img)
//         } else if (map[i][j] === 'F') {
//             cell.id = 'finish'
//         }
//         document.getElementById(`line${i+1}`).appendChild(cell)
//     }
// }
