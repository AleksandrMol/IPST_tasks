import { print } from './utils/print.js';

const main = () => {
    let operators = [];
    let stringNumber = "";
    return (state) => {

        let last = operators[operators.length - 1];

        let isOperator = (str) => {
            return str === "x" || str === "/" || str === "+" || str === "-"
        }

        if ((isOperator(last)) && (isOperator(state)) && stringNumber === "") {//два оператора подряд стоять не должно, если пользователь вводит несколько операторов подряд, то они должны заменять друг друга
            console.log("Два оператора подряд нельзя");
            operators.splice(-1, 1, state);

        }else if ((isOperator(state)) && isFinite(last)) {
            operators.push(state);
            stringNumber = "";

        } else if (isOperator(state)) {
            operators.push(Number(stringNumber));
            operators.push(state);
            print(state);
            stringNumber = "";

        }else if (state === "АС") {//чистим массив
            operators = [];
            stringNumber = "";
            print("0");

        }else if (state === "С") {//удаляем данную строку с числом
            stringNumber = "";
            print("0");

        }else if (state === "=") { // запускаем скрипт конвертации массива в выражение и счёта (чёт мне кажется, что я намудрил...)
            operators.push(Number(stringNumber));

            mathReturn(operators);

            stringNumber = "";
            console.log(operators);

            print(operators[0]);
            
            return
            
        } else{
            stringNumber += state;
            print(stringNumber);
        }
        console.log("str " + stringNumber);
        console.log(operators);
    }
}

function multiplyAndDivide(arr) {
    while (arr.findIndex(i => i === "x" || i === "/") !== -1){ 

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

function mathReturn(arr){
    if(!isFinite(arr[arr.length - 1])){
        arr.splice(-1, 1);
    }

    multiplyAndDivide(arr); // выполняются операции умножения и деления
    addAndSubtract(arr);    // выполняются операции сложения и вычитания
}

export default main