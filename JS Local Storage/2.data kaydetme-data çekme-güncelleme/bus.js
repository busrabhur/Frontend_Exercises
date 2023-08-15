//data kaydetmeyi görelim
//setItem(), tarayıcıda yerel depolama alanına veri eklemek veya mevcut bir anahtarın değerini güncellemek için kullanılır. Bu yöntem, bir anahtar-değer çiftini yerel depolama alanına eklemek veya güncellemek için kullanılır.

localStorage.setItem('name','büşra'); //1.parametre property ismi ikinci parametre de o property e verilecek değer
localStorage.setItem('kullaniciTercihi','dark');
localStorage.setItem('age',30); //biz number da versek locakstorage da string olarak tutulur.

//local storage içindekileri görme yöntemleri
//1.console a localstorage yazmak
//2. application sekmesi altında local storage a bakabilirsin tablo şeklinde görmek için



//data çekme: getItem() //localStoragedan çektiğin datalar string tipinde gelir sonradan kullanmak için parse etmen gerekir.
let isim=localStorage.getItem('name');
console.log(isim);

//update: güncelleme de setItem()ile yapılır.
//setItem( ) verilen key mevcutsa update eder,mevcut değilse baştan oluşturur.Yani hem sıfırdan veri kaydetme hem de varolanı güncellemek için kullanılır.

//update 1.yol
localStorage.setItem('name','büşra buhur'),
console.log(localStorage.getItem('name'));
//2.yol
localStorage.name='galaksi';
console.log(localStorage.getItem('name'));


//Local storage a veri kaydetmenin handikapı??
//local storage da set ettiğin değerler orda tutuluyor fakat belli bi süre sonra local storage a kaydettiğin şeyler varsa onların silinmesi lazım veya kullanıcı log out a tıklayınca local storage daki verileri silmen lazım
//özetle uygulamayı kullanırken kaydetmen uygulamayla işin bitince burdan silmen lazım aksi halde güvenlik açığı oluşur.

