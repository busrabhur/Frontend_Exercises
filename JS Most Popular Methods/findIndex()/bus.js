// bir array içinde o verinin yerini değiştirmeden yani indexini değiştirmeden o datada bir güncelleme yapman gerektiğinde bu metot oldukça önemli

//findIndex():verilen koşul arrayin içindeki hangi indexte sağlanmışssa onu bulup onun indexini döndürüyor .ÇOK ÖNEMLİ BİR METOT

//ÖRNEK1:
const points=[70,75,25,35,10,80,27];
const index1=points.findIndex(p=> {
    return p==35; //35 değerine sahip olan elemanın idexini bize döndürecek.
});
points[index1]=3333; //güncellemek istediğimiz yeri indexi değişmeden güncellemiş olduk
console.log(points);


//ÖRNEK2:
const students=[
    {name:'osman',point:40},
    {name:'busra',point:30},
    {name:'elif',point:80},
];

const objectIndex=students.findIndex(s=>s.name=='osman');  //osman isimli objenin indexini döndürecek.
students[objectIndex].name='Çağla Şikel'; //indexi bulduk ve  dizi elemanını güncelledik.
console.log(students[objectIndex]);

