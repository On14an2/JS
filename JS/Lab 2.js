//вторая лаба
var animal = [];
animal.push("Газебо");
animal.push("Крыса");
animal.push("Пес");
animal.push("Пробел");
console.log(animal);
console.log(animal.length);

var animal = [];
animal.push("Газебо");
animal.push("Крыса");
animal.push("Пес");
animal.push("Пробел");
console.log(animal);

[animal[0], animal[animal.length - 1]] = [animal[animal.length - 1], animal[0]]
console.log(animal);

function swap (arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
swap(animal);
console.log(animal);

let Animals = ["лев", "слон", "жираф", "носорог", "гепард"];
console.log(Animals);
Animals.unshift("хомяк");
console.log("Добавим самое страшное животное а Африке", Animals);
let outSider = Animals.pop();
console.log(Animals, `\nСамое страшное животное ${Animals[0]}`, `Съел ${outSider+"a"}`);

function swap (arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
let predators = ["тигр", "лев", "волк", "пума", "ягуар"];
console.log(predators);
let herbivores = ["слон", "олень", "зебра", "кролик", "косуля"];
console.log(herbivores);
let friendlyfamily = predators.concat(herbivores);
console.log(friendlyfamily);
swap(friendlyfamily);
console.log();

let person = ["МЯу", "Мяумяу", "мяу"];
console.log(person);
person.unshift("Господин");
console.log(person);
person.pop();
person.pop();
console.log(person);
person = person.join("@");
console.log(person);