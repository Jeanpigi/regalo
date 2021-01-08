let edad: number = 12;
let regalo: number = 10000;
let suma: number = 0;

while (regalo <= 100000) {
    edad = edad + 1;
    regalo = 2 * regalo;
    suma = suma + regalo;
}

console.log(`Edad del último regalo es ${edad}`);
console.log(`Cantidad último regalo es ${regalo}`);
console.log(`Cantidad total de regalada es ${suma}`);
