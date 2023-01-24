class Genesis {
    age = 30;
    color = 'red';

    constructor(age,color){
        this.age = age ? age : this.age;
        this.color = color ? color: this.color;
    }
    
    getNames(){
        return ['m.dsfw.sf.wfw.fw']
    }
}

const genesis_1 = new Genesis(20, 'blue');
const genesis_2 = new Genesis();

console.log(genesis_1.age)
console.log(genesis_2.age)