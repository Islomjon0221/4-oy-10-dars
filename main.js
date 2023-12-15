// let user = {
//     name: "John",
//     age: 34,
//     family: {
//         parent: "Alex",
//         mom: "Anna"
//     }
// };

// let user1 = {...user};
// user1.family.mom = "Luci";
// user1.name = "Feruzbek";
// console.log(user);

// let arr0 = [3, -1, 5, 7, 10, 4];
// let a = arr0.find((value, index, arr0) => {
//     return index % 2 == 0
// });

// console.log(a);

// let sum = 0;
// arr.forEach((value) => {
//     sum += value
// })

// console.log(sum);

// let arr0 = [1, 2, 10, 105, 456]
// let sorted = arr0.sort(function(a, b) {
//     return a - b;
// });

// a-b Tartib b-a Tartib teskari

// console.log(sorted);


// 1-misol

// function ex1 (arr, arr1, arr2){ 
//     return arr2.concat(arr1, arr)
// }
// console.log(ex1());

// 2-misol

// let arr = [-1, 5, 25, 30]

// let ex2 = arr.find((value, index, arg) => {
//     if (value % 2 == 0 && value % 5 == 0){
//         return value
//     }
// });

// console.log(ex2);

// 3-misol
// function ex3(array) {
//     let sum;
//     array.find((value, index, arr) => {
//     if (0 > value){
//         sum = value;
//     }
// });
//  return sum
// }

// console.log(ex3([-1, 5, 25, 30]));


// 4-misol

// function finder(arg){
//     let son1 = 0;
//     arg.forEach(element => {
//         element % 2 == 1 && element % 3 == 0 ? son1++ : son1 = son1;
//     });
//     return son1
// }

// console.log(finder([15, 2, 10, 105, 456]));

// 5-misol

let massiv = [5, 19, 105, 7, 21]

function findElement(n){
    let answer;
    let okey = massiv.find((value, index, massiv) => {
        if (value == n) {
            answer = "Son topildi"
        } else {answer = "Son topildi"}
    });

    return answer
}

console.log(findElement(-1));