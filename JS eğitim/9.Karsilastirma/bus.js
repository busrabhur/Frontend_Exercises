let yas=30;

console.log(yas==30);
console.log(yas=="30"); //js burda tür dönüşümü yaptı ve string tür ile sayıyı eşit kabul etti.

//NOT:eğer ki js in stringten numbera yaptığı bu tür dönüşümüne karşı tipleri de kontrol edilsin ve  tipleri farklıysa eşit kabul edilmesin dersen 3 eşittir(===) kullanman gerekir.

console.log(yas===30);
console.log(yas==="30"); // bu sefer dönüşümden önce tipi farklı olduğu için farklı kabul etti.

//eşit değildir ifadesinde de aynı şekilde tip kontrolü de dahil edilsin derse dönüşüm ihtimaline karşı 2 eşittir kullan

console.log(yas!==30);
console.log(yas!=="30");
