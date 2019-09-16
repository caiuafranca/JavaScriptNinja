/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1,2.0,'3',function(){},[1,2,3,4,5,6]]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
addItem = function (item){
  var indice = arr.length;

	arr[indice++] = item;

	return arr;
};

console.log(addItem('casa'));
console.log(addItem(10.3));
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([1,11.4,'RJ']));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+ arr[arr.length-1][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ arr.length +' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+ arr[arr.length-1].length +' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var x = 10;
while(x <= 20){
	if(x % 2 === 0 ){
		console.log(x);
	};
	x++;
};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var x = 10;
while(x <= 20){
	if(x % 2 !== 0 ){
		console.log(x);
	};
	x++;
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var x100 = 100;
console.log( 'Números pares entre 100 e 120:' );


for (x =100; x <= 120; x++){
	if(x % 2 === 0 ){
		console.log(x);
	};
};

console.log( 'Números ímpares entre 111 e 125:' );

for(x = 111; x<= 125; x++){
	if(x % 2 !== 0 ){
		console.log(x);
	};
};