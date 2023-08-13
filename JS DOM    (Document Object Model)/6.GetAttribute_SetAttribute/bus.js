//href,class,style gibi şeyler ilgili etikete ait ATTRIBUTE lerdir.
//JS aracılığıyla etiketlere ait attributeleri çekip güncelleme ekleme silme yapabiliriz.


//**************************/
const link1=document.querySelector('a');//ilk a etiketini çektik
console.log(link1.getAttribute('href')); //a etiketinin  hangi attribütenü istiyorsan onu belirttin
link1.setAttribute('href','https://github.com/busrabhur/Frontend_Exercises/tree/main'); //hrefin içeriği değişti
link1.textContent="Github";
//***a etiketinin href attribute ü ve link yazısı değiştiridi*******

//ilk p etiketini çekip class attribute nu değiştirelim

const metin=document.querySelector('p');//karşısına çıkan ilk p yi getirir.
console.log(metin.getAttribute('class')); //bu etiketin class attributenu bir görelim
metin.setAttribute("class","newName1");//metin değişkeninde tutulan etiketin class ismi değiştirildi
metin.setAttribute("style","color:red")

//deg.setAttribute("attriubute adı","yeni değeri")
//NOT:setAttribute() metodu ile eiketlerin varolan attributelerine yeni değerler verebilirsin veya o etiketin öyle bi attribute u henüz yoksa sen sıfırdan js kullanarak o atrribute e değer verebilirsin


