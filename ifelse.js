/**
 * * o algoritimo iferlse serve para validação de dados, por exemplo:
 * *if (variavel1 == variavel2) {algo ira acontecer se a variavel1 igual a variavel2}
 * 
 * if: nome do algoritmo
 * parenteses (): local onde se declaram os parametros ou expressao a ser validada
 chave (): bloco de codigos a serem executados, ou seja, tudo que estiver dentro do 
 bloco de codigos sera executado
else: "senao" e onde setao executados os codigos, que estiverem dentro do bloco (), 
caso a vakudaçao do algoritimo "if" retorne falsa

operadores logicos

== serve para comparar se uma variavel/valor é igual a outra
1= serve para comparar se uma variavel/valor é diferente a outra 
> serve para comparar se uma variavel/valor é maior a outra
< serve para comparar se uma variavel/valor é menor a outra
>= serve para comparar se uma variavel/valor maior ou igual a outra
<= serve para comparar se uma variavel/valor é menor ou igual a outra 
*
* se "falso": adicionar o ponto de exclamação no inicio da
declaração de parámetros/expressão, por exemplo:
* if (!variavel1 == variavel2) { bloco de código } 
aqui significa que: se a comparação da variavell com a variavel2 retornar falso, 
os códigos que estiverem dentro do bloco de código serão executados,
 não havendo a necessidade do uso da cláusula "else"

 * criar um validador onde você irá declarar duas variáveis, cada uma com um valor DIFERENTE da outra, então haverá uma resposta diferente para cada situação
 * 
 * vamos criar dois inputs, onde cada input irá para cada uma das duas variáveis, ou seja:
 * <input type="text" id="txtVar1"/>
 * <input type="text" id="txtVar2"/>
 * 
 * var txtVar1 = document.getElementById("txtVar1");
 * var txtVar2 = document.getElementById("txtVar2");
 * 
 * txtVar1.value que tem que ser comparado com o txtVar2.value
 * 
 * enviar os dados via console.log()
 */
 




let var1 = "maça";
let var2 = "banana";

if (var1 !== var2) {
  console.log("As variáveis são diferentes.");
} else {
  console.log("As variáveis são iguais.");
}
