

//****1.YOL *****/
const username='busra';
const pattern=/[a-z]{6,10}/;  //regex formatı pattern tanımladık : sadece küçük harfleri kabul ediyor 6-10 karakter arası olmalı
let sonuc=pattern.test(username);//verilen usernamei regex patternimize uyuyormu diye test ettik
//TEST methodu regex formatına uyup uymadığına bakıp TRUE/FALSE dönecek
console.log(sonuc);

//****2.YOL *****/

let sonuc2=username.search(pattern);//inputun içinde patterni arayacağız.Varsa 0 ve daha büyük değer döner yoksa -1 döner
console.log(sonuc2);
