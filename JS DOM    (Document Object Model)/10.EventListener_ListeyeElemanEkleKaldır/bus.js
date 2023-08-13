// const button=document.querySelector('button');
//button isimli elemente tıklanınca ne olması gerkeiyorsa yanındaki parametreye yazdık..
// button.addEventListener('click',() =>{ 
//     console.log("Tıklandı.")}
// );

const liElemanlari=document.querySelectorAll('li');
// liElemanlari.forEach(element=>{
//     element.addEventListener('click',e=>{
//         console.log("li ye tıklandı");
//         console.log(e.target);//direkt olarak html elementi olarak tıklanan elemanı consolda gösterecek
//         e.target.style.color='blue';
//     })
// })

liElemanlari.forEach(element => {
    element.addEventListener('click',e=>{
        e.target.remove(); //tıklanan li etiketine ulaşıp o etiketi  siliyor.
    })
})

const button=document.querySelector('button');
const ul=document.querySelector('ul');
button.addEventListener('click',()=>{
    const li=document.createElement('li'); //li etiketi oluşturuldu ama içi boş texti yok
    li.textContent='javascript';
    ul.append(li);// append sona ekler.ul nin son elemanına eklenir.prepend() başına ekler
})//yeni bir li etiketi o

