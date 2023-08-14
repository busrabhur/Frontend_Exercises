

const button=document.querySelector('button');
const mainPopUp=document.querySelector('.main-popup');
button.addEventListener('click',()=>{ //butona tıklanınca popup açılsın
    mainPopUp.style.display='block';
})

//popup ı çarpıya basınca kapatmak için
const close=document.querySelector('.popup-close');
close.addEventListener('click',()=>{
    mainPopUp.style.display='none';
})




//sayfanın herhangi biyerine tıklanınca da popup kapansın istersen

mainPopUp.addEventListener('click',e=>{
    if(e.target.className==='main-popup'){
        mainPopUp.style.display='none';
    }
    
})
