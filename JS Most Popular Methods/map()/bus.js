
//dizideki her bir elamanı alıp güncelleyip geri döndürme amaçlı map kullanabilirz.
const points=[10,20,30,40];
const newPoints=points.map(p=>{
    return p+10; //her bi elemana 10 puan ekleyip yeni bir diziye atamış olduk.
})
console.log(newPoints);


//2.örnek
const students=[
    {name:'elif',point:30},
    {name:'busra',point:60},
    {name:'ezgi',point:15},
];
//Puanı 50 den düşüklere 15 puan ekleyerek yeni bi diziye at.MAp her bir elemanı güncelleyip return eder
const newStudents=students.map(stu=>{
    if(stu.point<50){
        stu.point+=15; //öğrencinin sadece puanını güncelledik.
        return students;//öğrenci objesini komple döndürür.
    }else{
        return stu;
    }
});
console.log(newStudents);
