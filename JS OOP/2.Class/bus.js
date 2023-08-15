class Person{
    constructor(name,age,email){
        this.userName=name;
        this.age=age;
        this.emailAdress=email;
    }
    login(){
        return `${this.userName} giriş yaptı.`; //template string 
    }
    logout(){
        return `${this.userName} çıkış yaptı`;
    }
 }

const person1=new Person("büşra buhur",24,"busra@gmail.com");
console.log(person1);
console.log(person1.login());

const person2=new Person("arif aksoy",26,"arif@gmail.com");
console.log(person2.emailAdress);
console.log(person2.logout());
