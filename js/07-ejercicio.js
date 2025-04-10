let numero1, numero2, numero3, numeroMayor;
numero1 = parseInt(prompt("ingrese el primer numero"))
numero2 = parseInt(prompt("ingrese el segundo numero"))
numero3 = parseInt(prompt("ingrese el tercer numero"))
numeroMayor = Math.max(numero1, numero2, numero3)
document.writeln(numeroMayor + " es el numero mas grande")