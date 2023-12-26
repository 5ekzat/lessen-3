//rest 

// const fruits=['banana','apple', 'kiwi','watermelon']


// const animals=['wolf','moonkey','dracon']

// const mix=[...fruits,...animals]
// console.log(mix);

// //spread

// const letters=[...fruits[0]]

// console.log(letters);

// //3 

// const [ , bn , ...kalgandar]=fruits
// console.log(bn, kalgandar);

// //4

// const apple = {
//     sort:'prevosjod',
//     tasty:true,
//     color:['red']
// }
// const {color, sort}=apple
// console.log(color);

//5

// function exchangeMoney (kurs, ...akcha){
//     const summa = akcha.map(function(som){
//         return  som / kurs
    
//     })
    
//     return summa;
// }
// exchangeMoney(89,100,2000,30000, 400000)
// console.log(exchangeMoney(89,100,2000,30000, 400000));

// 6

// function convertSom(som){
//  const rezultat={
//     eur: som/98,
//     rub: som/0.97,
//     usd: som/89
//  }
//  return rezultat
// }
// const {eur, rub, usd}=convertSom(7000)
// console.log(eur, rub, usd);

// обьектно ориентированное программирование 

// 1

// const animal={
//     type:'dog',
//     poroda:'тайган',
//     fast:true
// }

//2 

class Animal {
    constructor(option){
        this.type=option.type
        this.hastail=option.hastail
        this.fast=option.fast
    }
    voice(sound){
        console.log(this.type+'has' + sound + 'voice');
    }
}

class WildAnimals extends Animal{
    constructor(option){
        super(option)
        this.dangerous=option.dangerous
        this.smart=option.smart
    }
}

const dog=new WildAnimals ({
    // type:'dog',
    // poroda:'тайган',
    hastail:true,
    fast:true,
    smart:true,
    dangerous:true
})

console.log(dog);