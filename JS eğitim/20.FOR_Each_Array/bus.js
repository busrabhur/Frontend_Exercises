
const myArray=["busra","seher","abdurrahman","arif"];

//1.yöntem:
myArray.forEach(function(){ //dizinin her bir elemanı için bu fonksiyonu çağırır ve hello yazar 4 kez.
    console.log("hello");
})
console.log("*****");

//dizinin elemanlarını görmek için
myArray.forEach(function(kisi,index){
    console.log(kisi,index); //hem ilgili dizi elemanını hem de onun indexini gösterir.
})

console.log("*****");

//2.yöntem:
const myFunction=(kisi,index)=>{
    console.log(kisi+" "+index);
}

myArray.forEach(myFunction); //fonksiyona burda tekrar parametre vermiyoruz sadece adıyla çağrılıyor.


