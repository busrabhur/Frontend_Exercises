 
 
 //NOT:setAttribute() ile style attribute ude güncellenebilir veya yeni değerler verilebilr ancak buna yeni bir değer verince style daki diğer birçok özellik eziliyor çünkü style içinde birçok farklı özellik var.
  //o yüzdebn STYLE propertysi çeşitliliği fazla olan bir şey olduğu için farklı bir yöntem kullanmamamız daha doğru

  const baslik1=document.querySelector('h1'); //bulduğu ilk h1
  baslik1.setAttribute('style','color:red;'); //bu şekilde style a yeni bir özellik verince diğer farklı stil özelikleirni de ezdi.

  //Style attribüte u için için en doğru yöntem::
  const baslik2=document.querySelector('h2');
  baslik2.style.color='blue';
  baslik2.style.padding='40px';


//GEnelde bu yöntem de tercih edilmez.Class üzerinden yapılır.Bİr sonraki derste göreceğiz.
