const nums=[3,5,7,8,9,11,13];
const output=[];

for(let i=0;i<nums.length; i++){
    const element=nums[i];
    const square=element*element*element;
    output.push(square);
   

}
console.log(output);


// function square(element){
//     return element*element;
// }
// const square=element=>element*element;
// const square=x=> x * x; 

// const result= nums.map(function(element){
//     return element*element;
// })
// console.log(result);
// const result= nums.map(x=>x*4);
// console.log(result);

const result1=nums.filter(x=>x<11);
console.log(result1);

const result2=nums.find( x => x > 8);
console.log(result2);
