let email="busra.buhur.eng@gmail.com";
let control1=email.includes("@");
console.log(control1);


//obj.include(x) -- x ilgili obje string array vs x i içerirse TRUE döner , içermiyorsa FALSE döner.
let control2=email.includes(".eng",16);//16.indexten aramaya başlar
console.log(control2);

//include metodu dizilerin elemanlarını sorgulamak için de kullanılır.

let arr1=[1,2,3,4,5];
let control3=arr1.includes(3);
console.log(control3);

