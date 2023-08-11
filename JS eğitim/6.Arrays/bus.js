let isimler=["büşra","elif","eda"];
console.log(isimler[1]);

let numbers=[1,2,3,4,5];
console.log(numbers);
numbers.pop();
console.log(numbers);

//nOT: JS DEKİ DİZİLER DİNAMİKTİR.bOYUTU ARTIRILIP AZALTIRABİLİR.bOYUT BELİRTME ZORUNLULUĞU YOKTUR.

let randomArray=[1,2,"Ayse"];
console.log(randomArray.length);

//dizinin elemanları arasına istediğimiz bir simge karakteri koyalım-join()
let virgulluArray=randomArray.join(",");
console.log(virgulluArray);

//indexof ile bir elemanın dizinin kaçıncı indexinde olduğunu bulabiliriz.
console.log(randomArray.indexOf("Ayse"));

//diziye dizi şeklinde eleman eklemesi yapmak - concat([,,,])
diziAdded=randomArray.concat(["recep ivedik",1997]);
console.log(diziAdded);

//PUSH() -- dizinin sonuna yeni eleman ekler..
diziAdded.push(999);
console.log(diziAdded);

//POP()-- dizinin son elemanını siler ve sildiği elemanı return eder.
lastElement=diziAdded.pop();
console.log("push ile silinen eleman:"+lastElement);
console.log(diziAdded);

