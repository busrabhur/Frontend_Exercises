const ilk_p_degeri=document.querySelector('p')//ilk gördüğünü p yi getirir.
console.log("ilk hali:"+ilk_p_degeri.innerText);
console.log(ilk_p_degeri.innerText);//inner text metodu ile ilgili etiketin içindeki texti görüntülersin

//querySelector ile çektiğimiz ilgili p etiketinin textini GÜNCELLEYELİM
ilk_p_degeri.innerText="BüşraBüşraBüşra";
console.log("güncellemeden sonraki hali:"+ilk_p_degeri.innerText);

console.log("*******************************************")

//ÖNEMLİ:querySelectorAll() methodu nodelist tipinde değer döner ve bunu dizi gibi foreach ile gezebilirsin
const s = (a,b) => {
    let sonuc=a*b;
    console.log(sonuc);
};



//şimdi tüm p etiketlerini seçmek için QuerySelectorAll() kullanacağız

const tum_p_degerleri=document.querySelectorAll('p');

//aşağıda varolan p etiketlerinin içeriğine yeni yazı ekledik.

tum_p_degerleri.forEach(a=>{
    console.log(a.innerText); //burda innertext kullanmazsan etiketin içindeki yazıyı göstermiyor
    a.innerText+="+++Yeni değer ekledi";
})

console.log("********************")
//innerText() metoduyla sadece ilgili html etiketinin içindeki yazıyı değiştirebilirz veya çekebilirz
//innerHtml() metoduyla html etiketini komple güncelleyebilir veya çekebiliriz.,

const icerik1=document.querySelector('.icerik'); //icerik classlı etiketin içini çektik.
console.log(icerik1);
icerik1.innerHTML='<h3>end of world</h3>'; //html etiketini güncelledi.
//içeriği koruyup üstüne ekleme yapmak için += kullanabilirsin



//JS arrayi html e bastırmak için
const students=["elif","ece","eren"];
students.forEach(s=>{
    icerik1.innerHTML+=`<p>${s}</p>` //varolan etikete ekleme yaptı.
})