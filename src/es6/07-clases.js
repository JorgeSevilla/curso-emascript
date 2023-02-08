//Declarando
//class User{};

//Instanciando una clase
//const newUser = new User();

class User {
    //Métodos
    greeting(){
        return 'Hello';
    }
};

const instance = new User();
console.log(instance.greeting());
const instance2 = new User;
console.log(instance2.greeting());

//Constructores
class UserConstructor {
    //Constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hola desde constructor';
    }
}

const llamadoDesdeConstructor = new UserConstructor();

//this llamado al elemento padre
class UserThis{
    constructor(name){
        this.name = name;
    }
    //Métodos
    speak(){
        return 'Hola';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const call = new UserThis('Jorge');
console.log(call.greeting());

//Setters and Getters para almacenar y llamar elementos
class UserGetterAndSetter{
    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Métodos
    speak(){
        return 'Hola';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get userAge(){
        return this.age;
    }
    set userAge (numberAge){
        this.age = numberAge;
    }
   
}

const call2 = new UserGetterAndSetter('Jorge', 100);
console.log(call2.greeting());
console.log('Su edad: ' + call2.userAge);
console.log(call2.userAge = 99);
