
// Calculte and Sum of even number
let evenN: number = 100;
let sum: number = 0;
let calculate: number[] = [];
for (let index = 0; index < evenN; index++) {
    if (evenN % 2 == 0) {
        sum = sum + index;
        calculate.push(sum)
    }
}
console.log("cal and sum", sum, "Calculated value", calculate)

// Find Even number 
let Enumber: number[] = [10, 3, 4, 5, 6, 2, 7, 8, 10, 12, 13, 15, 16, 17, 19, 20]
for (let index = 0; index < Enumber.length; index++) {
    if (Enumber[index] % 2 == 0) {
        console.log("Even No", Enumber[index])
    }
}

// Odd number 

let Odnumber: number[] = [10, 3, 4, 5, 6, 2, 7, 8, 10, 12, 13, 15, 16, 17, 19, 20]
for (let index = 0; index < Enumber.length; index++) {
    if (Odnumber[index] % 2 != 0) {
        console.log("Odd No", Odnumber[index])
    }

}


// Write programe calculte area of circle

// let radius:number =  12;
let area: number = 0;
function CalculateArea(rad: number) {
    area = Math.PI * rad * rad;
    return area
}
CalculateArea(12)
console.log("arae of circle is", area)


// Write a program grade remover

let gradeArr: number[] = [90, 80, 70, 60, 65, 50, 45, 30, 35, 20, 25, 15, 10]

for (let index = 0; index < gradeArr.length; index++) {
    if (gradeArr[index] <= 50) {
        gradeArr.splice(index, 1)
        index--
    }

}
console.log("Remove below 50 number", gradeArr)

// Progaram 5
let LargeArr: number[] = [80, 70, 60, 65, 50, 45, 30, 35, 20, 25, 15, 10, 90]

let match: number = LargeArr[0]

for (let index = 1; index < LargeArr.length; index++) {
    if (LargeArr[index] > match) {
        match = LargeArr[index]
    }

}



// Last Assignment using Map , Filter 
// 1 -> map -> filter -> foreach 

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temp:number[] = [0, 10, 20, 30, 40]
let ArrList:number[] = temp.map((item:number) => {
    return (item * 9/5) + 32
 })
 console.log("tem arr" , ArrList)
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
 let num: string[] = ["apple", "banana", "cherry", "date", "grape"]
let CharList: string[] = num.filter((item: string) => {
    let find: string = item.charAt(5)
    if (find) {
        console.log("list in map", item)
        return item
    }
})


//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

let num1: number[] = [1, 2, 3, 4, 6, 16, 9, 32, 9, 64]
let findSqr: number[] = num1.filter((f) => f % 2 !== 0).map((item: number) => {
    return item * 2 
})

console.log("odd double number", num1)


//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

let num2: number[] = [1, 2, 3, 4, 6, 16, 9, 32, 9, 64]
let findESqr: number[] = num1.filter((f) => f % 2 == 0).map((item: number) => {
    return item * item 
})

console.log("even sqrt number", num1)



//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let Names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"]
let IncludedName: string[] = Names.map((item: string) => {
    // let addEx: string = `${item}!` 
    return `${item}!`
})

console.log("new RR", IncludedName)













