let yas=24;
if(true){
    
    let yas=1;
    console.log("1.if içinde:"+yas); // if bloğu içindeki yas ı yazdırır.
    if(true){
        yas=3;
        console.log("if içindeki ifin içinde:"+yas);
        var x=999; //var değişken block dışından da ulaşılabilir!!!!!!!!!!!!!!!!!!
        let y=99;//let değişken block dışından ulaşılamaz
    }
}
console.log(x);
//console.log(y); // y ye block dışında kaldığı için let şeklinde tanımlandığından ulaşamayız.