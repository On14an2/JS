var WayVKI = [];
WayVKI.push("ст. Черепаново");
WayVKI.push("Электричка Чер-НСК");
WayVKI.push("Станция Бердск");
WayVKI.push("Остановка пл. Горького");
WayVKI.push("Маршрутка 321");
WayVKI.push("остановка НииСистем");
WayVKI.push("500 метров на запад");
WayVKI.push("ВКИ");
var ReverseWay = [];
for (let i = WayVKI.length-1; i>=0; i--)
{
    if (WayVKI[i] == "500 метров на запад")
    {
        ReverseWay.push("500 метров на восток");
    }
    else
    {
        ReverseWay.push(WayVKI[i]);
    }
}
console.log(ReverseWay);


var WayVKI = [];
WayVKI.push("ст. Черепаново");
WayVKI.push("Электричка Чер-НСК");
WayVKI.push("Станция Бердск");
WayVKI.push("Остановка пл. Горького");
WayVKI.push("Маршрутка 27");
WayVKI.push("остановка НииСистем");
WayVKI.push("500 метров на запад");
WayVKI.push("ВКИ");
var ReverseWay = [];
var Gigant = [];
Gigant = WayVKI;
Gigant.pop();
Gigant.pop();
Gigant.push("2000 метров на восток");
Gigant.push("Гигант");
for (let i = Gigant.length-1; i>=0; i--)
{
    if (Gigant[i] == "2000 метров на восток")
    {
        ReverseWay.push("2000 метров на запад");
    }
    else
    {
        ReverseWay.push(Gigant[i]);
    }
}
console.log(Gigant);
console.log(ReverseWay);

var WayVKI = [];
WayVKI.push("ст. Черепаново");
WayVKI.push("Электричка Чер-НСК");
WayVKI.push("Станция Бердск");
WayVKI.push("Остановка пл. Горького");
WayVKI.push("Маршрутка 27");
WayVKI.push("остановка НииСистем");
WayVKI.push("500 метров на запад");
WayVKI.push("ВКИ");
var NoWay = [];
for (let i = WayVKI.length-1; i>=0; i--)
{
    if (WayVKI[i] == "2000 метров на восток")
    {
        NoWay.push("2000 метров на запад");
    }
    else
    {
        NoWay.push(WayVKI[i]);
    }
}
NoWay.splice(2,0,"Перейти дорогу");
console.log(NoWay);

var v=(7)
var list = [];
var flag = true;
for (let i = 2; i <= v; i++)
{
    for(let j = 2; j < i; j++)
    {
        if (i%j == 0)
        {
            flag = false;
        }
    }
    if (flag == true)
    {
        list.push(i);
    }
    flag = true;
}
console.log(list);
