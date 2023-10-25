var list = [];
for (i = 0; i < 10; i++)
{
    list.push(7);
}
console.log(list);

var str = ("stroke");
var mas = str.split(' ');
mas[0] = "Ayanami Rey";
str = mas.join(' ');
console.log(str);

var puzzle = ("Анекдот: шел как-то штирлиц по лесу , видит два офицера ,а он стучит в дверь два раза");
console.log(puzzle);
var mas = puzzle.split(' ');
var letter = [];
for (let i = 4; i < mas.length; i+=4)
{
    letter.push(mas[i]);
}
var puzzleLetter = letter.join(' ');
console.log(puzzleLetter);

var mas = [1, 3, 5, 1];
console.log(Math.sqrt((Math.pow((mas[2] - mas[0]), 2) + Math.pow((mas[3] - mas[1]), 2))))

var a = true;
while(a == true)
{
    var v = ("да");//ввод фигни
    if (v == "да")
    {
        var mas = ["Плато Путорана", "Алтай", "Карелия", "Байкал", "Камчатка", "Крым", "Кавказ"];
        var fortune = Math.floor((Math.random()*6));
        console.log(mas[fortune]);
        a = false;
    }
    else if (v == "нет")
    {
        console.log("Ну и не надо, бе");
        a = false;
    }
    else
    {
        console.log("Только 'да' или 'нет'");
        a = false;
    }
}

var v =("my cat"); //ввод слов
v.toLowerCase();
var mas = v.split(' ' || '');
var result = [];
var count = 0;
var words = [["my","мой"],["name","имя"],["is","это"],["how","как"],["buckwheat","гречка"],["cost","стоит"],["i","я"],["big","большой"],["cat","кот"],["much","много"]];
for(let i = 0; i < mas.length; i++)
{
    for(let j = 0; j < words.length; j++)
    {
        count++;
        if (mas[i] === words[j][0])
        {
            result.push(words[j][1]);
        }
        else
        {
            result[i - count]="?";
        }
    }
}
var reresult= result.join(' ');
console.log(reresult);
