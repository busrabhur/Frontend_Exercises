let person={
    isim:"büşra",
    soyisim:"buhur",
    meslek:"muhendis",
    dersler:["fizik","matematik","ingilizce"],
    myFunc:function(){
        this.dersler.forEach(function(ders){
            console.log(ders);
        })
    },
    adSoyad:function(){
        console.log(this.isim+" "+this.soyisim);
    }
}
person.myFunc();
person.adSoyad();

//this bu kısımda kullanılırsa windowu temsil eder
//this object tsnımı içinde kullanılırsai ilgili objenin kendi özelliklerine ulaşması amacıyla kullanılır.