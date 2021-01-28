let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

function outputMunsters(munsters) {
  Object.entries(munsters).forEach(mem => {
    console.log(`${mem[0]} is a ${mem[1].age}-year-old ${mem[1].gender} `);
  });
}

outputMunsters(munsters);
