let person={
    isim:"büşra",
    soyisim:"buhur",
    meslek:"muhendis",
    dersler:["fizik","matematik","ingilizce"]
}
console.log(person); //objenin tüm özelliklerini bastırır.

//objenin spesifik özelliklerine objName.() ile ulaşabiliriz.
//1.yöntem(.)
console.log("kişinin mesleği:"+person.meslek);
//2.yöntem
console.log("kişinin mesleği:"+person['meslek']);

//propert güncelleme de bu iki yöntemle de yapılabilir.
person.meslek="öğretmen";
console.log("kişinin mesleği:"+person['meslek']);
person['meslek']="avukat";
console.log("kişinin mesleği:"+person['meslek']);


//objelerde referansa göre adresleme olur.PErson2 ve person1 aynı bellek bölümünü işaret eder.
//Birinde yapılan değişiklik diğerini de etkiler çünkü aslında aynılar.
let person2=person;
person2.isim="Ceren";
console.log(person.isim);
