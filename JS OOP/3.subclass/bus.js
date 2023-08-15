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

 //subclass parent classının tüm özelliklerini taşır.Üstüne extra özellikler ekleyebilirsin.
 //subclassın kendine ait constructor yoksa parent ının constrcutorını kullanır.

 class AdminPerson extends Person{ //subclass
    constructor(name,age,email,role){
        super(name,age,email); //eğer subclassta yeni  üyeler eklemek istiyorsan yeni constructor içinden super ile üst classa ait olanları super içinde çağır.Veya super kullanmayacaksan hepsine baştan bağlama yapman gerekir.
        this.role=role;
    }

    deleteUser(u){
        club=club.filter(x=>x.userName!==u.userName); //verilen objeyi silip kalanıyla tekrar dizi döndürecek

    }
 }
const person1=new Person("Selin",33,"a@gmail");
const person2=new Person("ali",44,"m@gmail");
const person3=new Person("mehmetali",64,"i@gmail");

let club=[person1,person2,person3];
console.log(club);
const adminPerson1=new AdminPerson("Burak",34,"b@gmail.com");
adminPerson1.deleteUser(person2);
console.log(club);

const adminperson2=new AdminPerson("kadir",22,"k@gmail","manager");
console.log(adminperson2);


