const sectionElement=document.querySelector('section');
console.log(sectionElement.children);//HtmlCollection Tipinde gösterir

//HTML COLLECTİON öğelerini for eachle kullanamıyoruz.Bu yüzden arraya çevirmeliyiz
//ARRAYA ÇEVİRME:::
Array.from(sectionElement.children).forEach(child=>{
    child.classList.add('sectionChild');
})


//Bir element seçip parentine ve kardeşine bakalım
const baslik1=document.querySelector('h2');//bulduğu ilk h2'yi çeker
console.log(baslik1.parentElement);
console.log(baslik1.parentElement.parentElement);
console.log("h2 nin kendinden sonraki kardeşi:"+baslik1.nextElementSibling);
console.log("h2nin kendinde önceki(kardeşler aynı hizada)kardeşi:"+baslik1.previousElementSibling);

