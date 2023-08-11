
const dizi=["ekmek","soğan","patates","sinek","domates"];
console.log("sebze çantasındaki sineği bulunca dur.");

let i=0;
while(i<dizi.length){
    console.log(dizi[i]);
   
    if(dizi[i]=="sinek"){
        console.log("sinek yakalandı");
        break;
    }
    i++;


}
console.log("***döngü sonu***");

for(let i=0;i<10;i++){
    console.log(i);
    if(i===5){
        continue;
    }
}