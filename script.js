import { HashMap } from "./HashMap.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

/*
console.log(test);
console.log(test.get('grape'));
console.log(test.has('ice cream'));

console.log(test.remove('hat'));

console.log(test.length());

// test.clear();

console.log(test.keys());

console.log(test.values());

console.log(test.entries());
*/

test.set('jacket','golden');
console.log(test.length());

test.set('moon', 'silver')
console.log(test.length());
console.log(test.capacity);
console.log(test.entries());

console.log(test);

test.set('kite', 'pink');
console.log(test.length());

test.set('carrot', 'orang');
console.log(test.length());

console.log(test.get('carrot'));
console.log(test.has('kite'));

test.remove('lion');
console.log(test.entries());

console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.entries());
console.log(test.length());
console.log(test.get('lion'));
console.log(test.keys());
console.log(test.values());
console.log(test.has('hat'));
console.log(test.remove('hat'));