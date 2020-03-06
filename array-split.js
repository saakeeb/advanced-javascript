const numbers=[1,2,3,4,5,6,7,8,9];
const part=numbers.slice(2,6);
console.log(part);

const remove=numbers.splice(2,2,11,22);
console.log(remove);
console.log(numbers);

const join=numbers.join("");
console.log(join);