//objenin kendi içinde fonksiyon tanımlayabiliriz aynı diğer propertyler gibi . operatörüyle ulaşabiliriz
//obje içinde arrow funciton kullanılmaz..
//obje içinde istersen function keywordunu kaldırarak da fonksiyon yazbailirsin kısaltma amaçlıdır.

let person={
    isim:"büşra",
    soyisim:"buhur",
    meslek:"muhendis",
    dersler:["fizik","matematik","ingilizce"],
    login:function(){
        console.log("öğrenci okula giriş yaptı");
    },

    logout:function(){
        console.log("öğrenci okuldan çıkış yaptı.")
    },

    myfunc(){
        console.log("istersen bu şkeilde function keywordunu kaldırarak da object içinde fonks yazabilirsin")
    }

}

console.log(person.login());
console.log(person.logout());
console.log(person.myfunc());