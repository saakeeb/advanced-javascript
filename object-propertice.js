const students =[
    {id: 11, name: 'manna'},
    {id: 22, name: 'razzak'},
    {id: 33, name:'dildar'},
    {id: 44, name:'dipzol'}
];
// const namee=[];
// for ( const i=0; i=student.length; i++){
//     const studentName=student[i];
//     students.push(namee);
//     return namee;
    
// }

const names = students.map (s=>s.name);
console.log(names);

const ids= students.map(s=>s.id);
console.log(ids);

const bigger=students.filter(s=> s.id>40);
console.log(bigger);

const smaller=students.find(s=> s.id<23);
console.log(smaller);