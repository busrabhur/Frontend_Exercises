const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value; //form içinde name propertysi username1 olanın değerini al diyoruz
    const usernamPattern=/^[a-z]{6,10}$/;
    
    if(usernamPattern.test(username)){
    
        message.textContent='Başarılı';
    }else{
        message.textContent='Lütfen hepsini küçük harf ve 6-12 karakter arasında giriniz.';
    }
})

//hata var mesajı göstermiyor.
