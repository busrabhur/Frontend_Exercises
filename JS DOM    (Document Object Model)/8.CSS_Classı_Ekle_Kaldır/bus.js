const icerik=document.querySelector('p');//ilk p yi alır.
console.log(icerik.classList); //ilgili etiketin sahip olduğu class listesini gösterir.


//html etiketine js kullanarak class eklemek için 
icerik.classList.add('yeniClass');
icerik.classList.add('yeniClassım1');
//html etiketinden js kullanarak class silmek için 
icerik.classList.remove('yeniClass');


//bütün p etikerlerini seçip p etiketinin textinde 'success ' kelimesi geçenlere success classı ver ,'error' kelimesi geçenlere error classını ver (js üzerinden)
const tumPdegerleri=document.querySelectorAll('p'); //tüm p etiketlerini çeker
tumPdegerleri.forEach(pElement => {
    if (pElement.textContent.includes('error')) { //error kelimesi geçen p etiketlerine error isimli class ekle
        pElement.classList.add('error');
    }
    if(pElement.textContent.includes('success')){//success kelimesi geçen p etiketlerine success isimli 
        pElement.classList.add('success');
    }
});
