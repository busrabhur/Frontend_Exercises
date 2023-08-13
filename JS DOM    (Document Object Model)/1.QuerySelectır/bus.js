const hata=document.querySelector('p');//html sayfasındaki ilk p etiketini seçecek hepsini seçmez.
console.log(hata);

const hata1=document.querySelector('.error');//error classına sahip gördüğü ilk etiketi seçer,hepsini değil
console.log(hata1);

//divin etiketi olup classı error olanı seçmek için ---> div.error
const hata2=document.querySelector('div.error');
console.log(hata2);

console.log("****************")
//tüm p etiketlerini seçmek için --> querySelectorAll();

const hatalar=document.querySelectorAll('p'); //array şeklinde tutacak

hatalar.forEach(hatam=>{
    console.log(hatam);
})

