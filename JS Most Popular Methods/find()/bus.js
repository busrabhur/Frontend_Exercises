//FİND methodunun HANDİKAPI: find ilgili yerde aradığın şeyden birden çok tane varsa sadece ilk bulduğunu getirir.o yüzden aynı değerden birden çok varsa DİKKAT! böyle durumlarda filter() daha mantıklı

//koşul true olduğu anda diğerlerine bakmayı bırakır.
const points=[20,90,30,93]; //ilk 90 ı bulacak ve gerisine bakmaz.
const selectedPoint=points.find(p=>{
    return p>70;
})
console.log(selectedPoint);
