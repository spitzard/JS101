let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let entries = Object.entries(munsters);

let age = entries.filter(mem => mem[1].gender === 'male').reduce( function(acc, mem) {
  return acc + mem[1].age;
},0);
console.log(age);