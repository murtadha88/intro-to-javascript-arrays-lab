//EX1:
console.log("=================Ex1=================");
const foods = [];  
console.log('Exercise 1 result:', foods);

//EX2:
console.log("=================Ex2=================");
foods.push("pizza" , "cheeseburger");
console.log('Exercise 2 result:', foods);

//EX3:
console.log("=================Ex3=================");
foods.unshift("taco");
console.log('Exercise 3 result:', foods);

//EX4:
console.log("=================Ex4=================");
const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

//EX5:
console.log("=================Ex5=================");
foods.splice(2,0,"tofu");
console.log('Exercise 5 result:', foods);

//EX6:
console.log("=================Ex6=================");
foods.splice(1,1,"sushi" , "cupcake");
console.log('Exercise 6 result:', foods);

//EX7:
console.log("=================Ex7=================");
const yummy = foods.slice(1,3);
console.log('Exercise 7 result:', yummy);

//EX8:
console.log("=================Ex8=================");
let soyIdx = foods.indexOf("tofu");
console.log('Exercise 8 result:', soyIdx);

//EX9:
console.log("=================Ex9=================");
const allFoods = foods.join(" -> ");
console.log('Exercise 9 result:', allFoods);

//EX10:
console.log("=================Ex10=================");
const hasSoup = foods.includes("soup");
console.log('Exercise 10 result:', hasSoup);

//EX11:
console.log("=================Ex11=================");
const odds = [];
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
for(let num of nums){
    if(num%2==1){
        odds.push(num);
    }
}
console.log('Exercise 11 result:', odds);

//EX12:
console.log("=================Ex12=================");
const fizz = [];
const buzz = [];
const fizzbuzz = [];
for(let num of nums) {
    if(num%3 === 0){
        fizz.push(num);
        if(num%5 === 0) {
            fizzbuzz.push(num);
        }
    }
    else if(num%5 === 0){
        buzz.push(num);
    }
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);