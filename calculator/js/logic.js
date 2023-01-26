import { print } from './utils/print.js';

const main = () => {
    let operators = [];

    return (state) => {

        let last = operators[operators.length - 1];

        // первым элемнтом массива должен быть только строка с числом
        if ((!isFinite(state) && operators.length === 0)) {
            console.log("Массив пуст и оператор я не вставлю");
        }else if (operators[0] === "0" && isFinite(operators[1])) {// если пользователь вводит первым делом ноль, то дальше должен быть либо оператор, либо точка, либо ноль должен замениться на следущую цифру
            operators.splice(0, 1);
            operators.push(state);
        }else if (!isFinite(state) && !isFinite(last) && (state !== "АС" && state !== "С" && state !== "=")) {//два оператора подряд стоять не должно, если пользователь вводит несколько операторов подряд, то они должны заменять друг друга
            console.log("Два оператора подряд нельзя");
            operators.splice(-1, 1, state);
        }else if (state === "АС") {//чистим массив
            operators = [];
        }else if (state === "С") {//удаляем последний элемент массива
            operators.splice(-1, 1);
        }else if (state === "=") { // запускаем скрипт конвертации массива в выражение и счёта (чёт мне кажется, что я намудрил...)
            mathReturn(operators);
            console.log(operators);
            print(operators[0].toFixed(5));
            return
        } else{
            operators.push(state);
        }

        console.log(operators);

        print(state);
    }
}

function findLeft(index, arr) { // клеит вместе числа слева от знака, конвертирует строку в число.
    let count = 0;
    let arrL = [];

    for (let i = index - 1; (i > -1 && isFinite(arr[i])); i--) {
        arrL.unshift(arr[i]);
        count++;
    }
    console.log("left " + Number(arrL.join("")));
    
    arr.splice(index - count, count, Number(arrL.join("")));
}

function findRight (index, arr){ // клеит вместе числа справа от знака, конвертирует строку в число.
    let count = 0;
    let arrR = [];

    for (let i = index + 1; (i < arr.length  && isFinite(arr[i])); i++) {
        arrR.push(arr[i]);
        count++;
    }
    console.log("right " + Number(arrR.join("")));
    
    arr.splice(index + 1, count, Number(arrR.join("")));
}

function multiplyAndDivide(arr) {
    while (arr.findIndex(i => i === "x" || i === "/") !== -1){ 
        
        console.log(arr.findIndex(i => i === "x" || i === "/"));

        findLeft(arr.findIndex(i => i === "x" || i === "/"), arr); 
        findRight(arr.findIndex(i => i === "x" || i === "/"), arr); 

        switch (arr[arr.findIndex(i => i === "x" || i === "/")]) {
            case "x":
                console.log("Умножаем");
                let result_1 = arr[arr.findIndex(i => i === "x" || i === "/") - 1] * arr[arr.findIndex(i => i === "x" || i === "/") + 1];
                arr.splice(arr.findIndex(i => i === "x" || i === "/") - 1, 3, result_1);
                break;
            case "/":
                console.log("Делим");
                let result_2 = arr[arr.findIndex(i => i === "x" || i === "/") - 1] / arr[arr.findIndex(i => i === "x" || i === "/") + 1];
                arr.splice(arr.findIndex(i => i === "x" || i === "/") - 1, 3, result_2);
                break;
        
            default:
                break;
        }
    }
}

function addAndSubtract(arr) {
    while (arr.findIndex(i => i === "+" || i === "-") !== -1){ 
        
        console.log(arr.findIndex(i => i === "+" || i === "-"));

        findLeft(arr.findIndex(i => i === "+" || i === "-"), arr);
        findRight(arr.findIndex(i => i === "+" || i === "-"), arr);

        switch (arr[arr.findIndex(i => i === "+" || i === "-")]) {
            case "+":
                console.log("Складываем");
                let result_1 = arr[arr.findIndex(i => i === "+" || i === "-") - 1] + arr[arr.findIndex(i => i === "+" || i === "-") + 1];
                arr.splice(arr.findIndex(i => i === "+" || i === "-") - 1, 3, result_1);
                break;
            case "-":
                console.log("Вычитаем");
                let result_2 = arr[arr.findIndex(i => i === "+" || i === "-") - 1] - arr[arr.findIndex(i => i === "+" || i === "-") + 1];
                arr.splice(arr.findIndex(i => i === "+" || i === "-") - 1, 3, result_2);
                break;
        
            default:
                break;
        }
    }
}

function findFractions(arr) { // делает десятичные дроби
    while (arr.findIndex(i => i === ".") !== -1){ 
        
        console.log(arr.findIndex(i => i === "."));

        findLeft(arr.findIndex(i => i === "."), arr);
        findRight(arr.findIndex(i => i === "."), arr);

        let result = `${arr[arr.findIndex(i => i === ".") - 1]}.` + `${arr[arr.findIndex(i => i === ".") + 1]}`;
        arr.splice(arr.findIndex(i => i === ".") - 1, 3, Number(result));
        
    }
}

function mathReturn(arr){
    // let multiplierDivisorId = arr.findIndex(i => i === "x" || i === "/");

    if(!isFinite(arr[arr.length - 1])){
        arr.splice(-1, 1);
    }

    findFractions(arr);
    multiplyAndDivide(arr); // выполняются операции умножения и деления
    addAndSubtract(arr);    // выполняются операции сложения и вычитания
    
}

export default main