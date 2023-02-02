class Genesis {
    age = 5; 
    color = 'red';
    hobby = 'gameBoy';
    name ='';

    constructor(ageInput,colorInput,nameInput){
        // console.log('i have been called ')
        this.age = ageInput ? ageInput : this.age;
        this.color = colorInput ? colorInput: this.color;
        this.name = nameInput ? nameInput : this.name;
    }
    
    getNames(){
        return ['m.dsfw.sf.wfw.fw']
    }
}

const maor = new Genesis(6, 'blue','maor');
const nitsa = new Genesis();
// nitsa.name = 'nitsa'
console.log(nitsa)
// console.log(genesis_1.age)
// console.log(genesis_2.age)