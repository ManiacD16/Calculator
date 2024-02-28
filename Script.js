function startCal() {


    let sum = (a, b) => Number(a) + Number(b);
    let sub = (a, b) => a - b;
    let mul = (a, b) => a * b;
    let div = (a, b) => a / b;
    let mod = (a, b) => a % b;

    function Calculator(task, a, b) {
        return (task(a, b));
    }
    let a = prompt("Value of a is: ");
    let b = prompt("Value of b is: ");
    let operation = prompt("Value of operation: ");
    switch (operation) {
        case "+":
            document.write("a+b is: " + Calculator(sum, a, b));
            console.log("a+b is: " + Calculator(sum, a, b));
            break;
        case "-":
            document.write("a-b is: " + Calculator(sub, a, b));
            console.log("a-b is: " + Calculator(sub, a, b));
            break;
        case "*":
            document.write("a*b is: " + Calculator(mul, a, b));
            console.log("a*b is: " + Calculator(mul, a, b));
            break;
        case "/":
            document.write("a/b is: " + Calculator(div, a, b));
            console.log("a/b is: " + Calculator(div, a, b));
            break;
        case "%":
            document.write("a%b is: " + Calculator(mod, a, b));
            console.log("a%b is: " + Calculator(mod, a, b));
            break;
        default:
            console.log("Incorrect Operations");
    }
}