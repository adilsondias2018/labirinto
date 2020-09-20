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

const nums = [1,2,3,4,5]

// console.log(nums);

// // for com propósito

//     // transforma os arrays para um array de mesmo tamanho!

// /*
//     Map recebe três parament

//     Podemos chamar mais map dentro de outros maps
//     lebrando que ele não modifica o array atual.
// */

let resultado = nums.map(function(e){

    if ( e > 3){

        return e * 2

    } else if ( e < 3){

        return e * ( e + e)
    }else {

        return e
    }
})

// let teste = map.map(function(e){

//     if(e === 'w'){

//         return 'rotornando o w'
//     }else if (e === 's'){
//      return 'você venceu'
//     }else if( e === 'null'){
//         return 'movimento'
//     }else{
//         return 'final'
//     }

// })
    


// console.log(resultado)

// console.log(map)

const soma10 = e => e + 10
const tripo =  e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(tripo).map(paraDinheiro)

console.log(resultado);




