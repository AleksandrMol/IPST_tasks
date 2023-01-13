
export class WorkerClass { // задания L - M
    private name: string
    private surneme: string
    private rate: number
    private days: number

    constructor(nameProp: string, surnemeProp: string, rateProp: number, daysProp: number) {
        this.name = nameProp;
        this.surneme = surnemeProp;
        this.rate = rateProp;
        this.days = daysProp;
    }
  
    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }

    get getName() {
        return this.name
    }
    get getSurname() {
        return this.surneme
    }
    get getRate() {
        return this.rate
    }
    get getDays() {
        return this.days
    }

    set setRate(value: number) {
        this.rate = value;
    }
    set setDays(value: number) {
        this.days = value;
    }
}

export class MyString { // Задание O
    reverse(str: string) {
        let string = str.trim();
        let strArr = string.split("").reverse().join("");
        return strArr;
    }

    ucFirst(str: string) {
        let string = str.trim();
        if(!string.trim()) {
            return "Строчки не существует"
        }
        else {
            let newStr = `${string[0].toUpperCase()}${string.slice(1)}`;
            return newStr;
        }
    }

    ucWords(str: string) {
        let string = str.trim();
        if(!string.trim()) {
            return "Строчки не существует"
        }
        else {
            let arr = string.split(" ");
            arr = arr.map((el) => {
                if(!el) {
                    return "";
                }
                else{
                    let newStr = `${el[0].toUpperCase()}${el.slice(1)}`;
                    return newStr
                }
            })
            return arr.join(" ");
        }
    }
}