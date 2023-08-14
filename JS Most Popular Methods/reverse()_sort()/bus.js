// sort():sıralamak için kullanılır.string,sayı,object
//reverse():tersten sıralama yapar.Büyükten küçüğe, sondan başa

const names=["elif","azra","mahmut","canan"];
names.sort(); // dizide kalıcı değişiklik yapıyor
console.log(names);
names.reverse();
console.log(names);
//stringleri doğru sıraladı

const points=[20,30,3,1,44,33];
//points.sort();// sadece ilk rakalamlarına bakarak sıralar ve yanlış bi sıralama yapar.
points.sort((a,b)=>b-a); //büyükten küçüğe//a : ilk sayı b:sonraki sayı.a ve b diziyi gezerken sürekli değişir
//bu yöntemle doğru sıralarsın


console.log("büyükten küçüğe:"+points);
points.sort((a,b)=>a-b); //küçükten büyüğe sıralar
console.log("küçükten büyüğe:"+points);