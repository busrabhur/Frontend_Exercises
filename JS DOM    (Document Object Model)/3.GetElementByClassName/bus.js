//getElementByClassName() kullanarak içine nokta kullanmadan sadece class adını  yazarak html elementlerini çekebilirsin

const hatalar=document.getElementsByClassName('person'); //oluşan arrayi for each ile görünteleyemiyoruz
console.log(hatalar); //HTML COlllection şeklinde gösterir
console.log(hatalar[0]);


//GetElementsByClassName metodu html collection şeklinde değer döndürür ve html collectionu for each döngüsüyle beraber kullanamayız.QuertSelectorun döndürdğü değerler NODELİST olduğu için ondan gelen dizileri foreachle birlikte kullanabiliriz.

// hatalar.forEach(hata => { 

//     console.log(hata);
// });

