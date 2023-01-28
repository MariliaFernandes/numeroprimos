function calcularNumeroPrimo(numero) {
  var quantidade = 0;
  var totalPrimo = 0;
  var numsPrimo = [];
  // 2 até 100
  for (let i = 2; i <= numero; i++) {
    //1 ate 100
    for (let j = 1; j <= numero; j++) {
      // i/j 2 / 1 = 0
      // i / j 2/ 2 = 0
      // i / j 2 / 2 = 1
      var resto = i % j;

      if (resto === 0) {
        quantidade++;
      }

      if (quantidade > 2) {
        break;
      }
    }

    if (quantidade === 2) {
      numsPrimo.push(i); //2
      totalPrimo += i; //0 += 1 2
    }

    quantidade = 0;
  }

  console.log("A soma dos números Primos:", totalPrimo);
  console.log("Números Primos de 2 a 1000:", numsPrimo);
}

calcularNumeroPrimo(1000);
