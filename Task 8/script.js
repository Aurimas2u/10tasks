/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.sum = () => {
        return num1 + num2;
    }
    this.subtraction = () => {
        return num1 - num2;
    }
    this.multiplication = () => {
        return num1 * num2
    }
    this.division = () => {
        return num1 / num2;
    }

  }

  const obj = new Calculator(5,2);