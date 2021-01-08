# Regalos

## Ejercicio

Los padres de Maria le prometieron darle 10000 pesos cuando cumpliera 12 años de edad y duplicar esta cantidad en cada cumpleaños subsiguiente  hasta que excediera los 100000 pesos. Escriba un  algoritmo para determinar  qué edad tendrá la niña cuando se le dé la última cantidad
y cuánto fue la cantidad recibida.


# Análisis

La cantidad regalada a Maria se irá duplicando, la condición que controla el mientras que permite que no entre cuando  el regalo exceda los 100000 pesos. Para duplicar la cantidad del regalo se duplica la variable regalo, a su vez se incrementa la edad de Maria en 1 y se va sumando la cantidad recibida en cada regalo en un acumulador denominado suma. La variable edad funciona como un contador. Cuando el algoritmo culmine el ciclo mientras que, el valor de edad correspondería al valor de n buscado.


# Run

If you just want to run, you can use a command which is:

```
deno run regalo.ts
```


# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


# Authors
* **Jean Pierre Giovanni Arenas Ortiz**

# License
[MIT](https://choosealicense.com/licenses/mit/)