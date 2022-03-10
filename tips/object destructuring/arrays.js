const data = ["one", "two", "three"];

let one, two, three, four, rest;

[one, two] = data;
console.log(one); // 'one'
console.log(two); // 'two'

[one, , three, four = "four"] = data;
console.log(one); // 'one'
console.log(three); // 'three'
console.log(four); // 'four'

[one, ...rest] = data;
console.log(one); // 'one'
console.log(rest); // ['two', 'three']
