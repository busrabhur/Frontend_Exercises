const func1=function(yas=18,il="denizli"){
    console.log("yaşınız:"+yas+ " yaşadığınız şehir:"+il);
}
func1();
func1(24,"Istanbul");


 //func1 i işleme sokamayız çünkü return edilen bi değeri yok.


const kareAlani=function(kenarUzunlugu){
    return kenarUzunlugu**2;
}
const alan=kareAlani(9);
console.log(alan);
