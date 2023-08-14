const kutu=document.querySelector('.kutu');
kutu.addEventListener('mousemove',e=>{ //e eventin baş harfi//mousemove--mouse hareket ettiğinde
   // console.log(e) bu e  mouse hareket ettikçe mouseun koordinatlarını çeker
   kutu.textContent=`x koordinatı:${e.offsetX} ,y koordinatı:${e.offsetY}`
})