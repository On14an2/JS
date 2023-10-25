const planets = [
    { name: "Меркурий", distanceFromSun: 0.39 },
    { name: "Венера", distanceFromSun: 0.72 },
    { name: "Земля", distanceFromSun: 1.00 },
    { name: "Марс", distanceFromSun: 1.52 },
    { name: "Юпитер", distanceFromSun: 5.20 },
    { name: "Сатурн", distanceFromSun: 9.58 },
    { name: "Уран", distanceFromSun: 19.22 },
    { name: "Нептун", distanceFromSun: 30.05 }
];

console.log("Планеты, близкие к Солнцу:");
for (const planet of planets) {
    if (planet.distanceFromSun <= 1) {
        console.log(`${planet.name}: ${planet.distanceFromSun} а.е.`);
    }
}

const basketballTeam = [
    { lastName: "Иванов", height: 192, weight: 78 },
    { lastName: "Петров", height: 188, weight: 85 },
    { lastName: "Сидоров", height: 196, weight: 75 },
    { lastName: "Козлов", height: 190, weight: 82 },
    { lastName: "Смирнов", height: 185, weight: 77 }
];

console.log("\nИгроки с ростом > 190 см и весом < 80 кг:");
for (const player of basketballTeam) {
    if (player.height > 190 && player.weight < 80) {
        console.log(player.lastName);
    }
}

const calorieCounter = [
    { name: "Яблоко", weight: 150, calories: 52 },
    { name: "Банан", weight: 120, calories: 105 },
    { name: "Морковь", weight: 100, calories: 41 },
    { name: "Огурец", weight: 80, calories: 16 },
    { name: "Куриное мясо", weight: 200, calories: 335 },
    { name: "Рис", weight: 150, calories: 130 },
    { name: "Гречка", weight: 100, calories: 360 }
];

function findMinCalorieProducts(products) {
    let minCalories = Infinity;
    let selectedProducts = [];

    for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
            const totalCalories = products[i].calories + products[j].calories;
            if (totalCalories < minCalories) {
                minCalories = totalCalories;
                selectedProducts = [products[i], products[j]];
            }
        }
    }

    return selectedProducts;
}

const selectedProducts = findMinCalorieProducts(calorieCounter);
console.log("\nДва продукта с минимальной суммарной калорийностью:");
for (const product of selectedProducts) {
    console.log(`Название: ${product.name}, Вес: ${product.weight} г`);
}