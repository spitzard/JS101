let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let values = Object.values(obj);
console.log(values);

let mapped = values.map(value => {
  if (value.type === 'fruit') return value.colors.map(color => color[0].toUpperCase() + color.substring(1));
  else return value.size.toUpperCase();
});
console.log(mapped);