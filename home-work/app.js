
class Car {
    constructor(option){
        this.type=option.type
        this.economical=option.economical
        this.fast=option.fast
    }
    voice(sound){
        console.log(this.type+'has' + sound + 'voice');
    }
}

class Airplane extends Car{
    constructor(option){
        super(option)
        this.dangerous=option.dangerous
        this.flying=option.flying
    }
}
class Submarines extends Car{
    constructor(option){
        super(option)
        this.expensive=option.expensive
        this.rare=option.rare
    }
}
class OrdinaryCar extends Car{
    constructor(option){
        super(option)
        this.accessible=option.accessible
        this.petrol=option.petrol
    }
}

const camri=new OrdinaryCar ({
    type:'ordinaryCar',
    poroda:'camri',
    fast:true,
    economical:true,
    dangerous:false,
    flying:false,
    expensive:true,
    rare:false,
    accessible:false,
    petrol:true
})

console.log(camri);