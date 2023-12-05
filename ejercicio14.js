// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(array) {
    let repetitions= {}

    array.forEach(element => {
        if(repetitions[element]) repetitions[element]=repetitions[element]+1
        else repetitions[element]=1
        
    });

    return repetitions
  }

  console.log(repeatCounter(counterWords))