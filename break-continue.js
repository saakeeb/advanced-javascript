const numbers=[1,2,3,4,5,6,7,8];
for (let i=0; i<numbers.length;i++){
    console.log(numbers[i]);

    if(numbers[i]>6){
        break;
    }
    
}

const numbers1=[1,2,-3,4,5,-6,7,-8];
for (let i=0; i<numbers1.length;i++){
    // console.log(numbers1[i]);

    if(numbers1[i]<0){
        continue;
    }
    console.log(numbers1[i]);
 
}
//if condition...

if({}){
    console.log("I am not false")
}
else{
    console.log("I am false")
}

if( 'false' ){
    console.log("I am not false")
}
else{
    console.log("I am false")
}