const sherlock = {
  surName: 'holmes',
};
// Console.log(age);Reference error
console.log(sherlock.age?.foo);

const capitan = 'Pepe';
const ship = { capitan };

const double = (array) => {
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line operator-assignment
    array[i] = 2 * array[i];
  }
};

const aData = [1, 3, 5];
double(aData);
console.log(aData);

const obj = { name: 'Pepe', age: 22 };

console.log(obj);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));
