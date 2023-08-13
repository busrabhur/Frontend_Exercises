

//!!!getElementsByClassName de olduğu gibi bunun döndürdğü değer de html collection tipindedir ve foreach döngüsüyle birlikte kullanılmaz(olumsuz bir özellik)

const basliklar=document.getElementsByTagName('p');//tüm p elementlerini getirir.
console.log(basliklar[0]); //bu şeklide teker teker görebilirsin
console.log(basliklar);//html collection şeklinde


