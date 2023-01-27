class Genesis {
    age = 30;
    color = 'red';

    constructor(ageInput,colorInput){
        this.age = ageInput ? ageInput : this.age;
        this.color = colorInput ? colorInput: this.color;
    }
    
    getNames(){
        return ['m.dsfw.sf.wfw.fw']
    }
}

const genesis_1 = new Genesis(20, 'blue');
const genesis_2 = new Genesis();

console.log(genesis_1.age)
console.log(genesis_2.age)