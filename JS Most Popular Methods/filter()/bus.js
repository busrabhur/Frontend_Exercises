const points=[10,7,99,100,76,50,30,24];

const studentsPassed=points.filter(point=>{
    return point>50;
})
console.log(studentsPassed);


const students=[
    {name:'büşra',passed:true},
    {name:'arif',passed:false},
    {name:'orhan',passed:true},
];

const passingStudents=students.filter(s=>{
    return s.passed;
})
console.log(passingStudents);
