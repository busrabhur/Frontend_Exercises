const correctAnswers=['E','E','E','E'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();//sayfa yenilenmesin
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //kullanıcının verdiği cevapların dizisi ile doğru cevaplar dizisini kıyaslayalım.
    userAnswers.forEach((answer,index)=>{ //hem elemanı hem de indexini dönebilir
        if(answer===correctAnswers[index]){
            score+=25;
        }
    })
    result.classList.remove('d-none'); //görünür hale gelecek
    let puan=0;
    const bastir=setInterval(() => {
        result.querySelector('span').textContent=`${puan}%`;  //resultun altındaki span etiketini çektik.!!
        if(puan===score){
            clearInterval(bastir);
        }else{
            puan++;
        }
    }, 10);//20 ms de bir çalışacak
    
})
//formlardaki input değerlerinin içeriğine ulaşmak için form.nameAttributeAdı.value
//inputun name attribute u önem teşkil ediyor


// setTimeout(() => {
//     console.log("büşra");  //set time out 1 kez çalışır ve yazılan saniye kadar süre sonra içindeki işlemi yapar
// }, 2000);


// setInterval(() => { //1 sniyede bir içindeki işlemi sürekli olarak yapacak.Bunu durdurmanın yolu clearIntervaldir.
    
// }, 1000);


// i=0;
// const bastir=setInterval(() => {
//     console.log("büş");
//     i++;//her çalışmasında artık kaç saniyede bir çalışıyorsa bu i değeri artacak
//     if(i===4){
//         clearInterval(bastir); //hangi intervali durduracaksan parametre olarak onu ver.
//     }

// }, 1000);
