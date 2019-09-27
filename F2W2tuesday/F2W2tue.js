// 1
var names = ["Peter", "Jan", "Peter", "Bo", "Frederik"];

console.log(names);

var result1 = names.filter(el => el.includes("a"));

console.log(result1);

var reversedNames = names.map(el => el
.split("")
.reverse()
.join()
);
console.log(reversedNames);



// 5b
var numbs = [2,3,67,33];
var sum = numbs.reduce((x,y) => x+y);
console.log('sum',sum);
