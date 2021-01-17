let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


function sumAges(munsters) {
  let totalAges = Object.values(munsters).reduce( (total, single) => {
    return total + single;
  },0);
  return totalAges;
}

console.log(sumAges(ages));
