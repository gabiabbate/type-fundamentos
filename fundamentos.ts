let meuBoolean: boolean = true;
//alert (meuBoolean);

// // o number é um ponto flutuante,
// // hexa, octal e binario
let meuOctal: number = 0o13;
alert(meuOctal);

let meuBinario: number = 0b11;
alert(meuBinario);

let meuHexa: number = 0xAB13;
alert(meuHexa);

let texto: String = "Ola Typescript";
//alert (texto);

let logradouro: string = "Rua 7 de Setembro";
let numero: string = "123B";
let cidade: string = "Blumenau";
let estado: string = "SC";
alert("Endereço: " + logradouro + ", " + numero"." + cidade + " - " + estado);

//com interpolação de string
alert(`Endereço: ${logradouro}, ${numero}. ${cidade} - ${estado}`);

// tipo array em TS
let meuArray: number[] = [1, 2, 3, 4];
alert(meuArray);

//pode ser feito com o <> irá ter o mesmo efeito e com isso fica tipado o array
let meuArray2: Array<number> = [1, 2, 3, 4];

//operador com tuplas
//exemplo de tuplas sao os dicionarios
/* palavra(string) -> significado(string)*/
let campeaoBrasileiro: [string, number] = ["Palmeiras", 2016];
let campeaoBrasileiro: [string, number] = ["Corinthians", 2015];
let campeaoBrasileiro: [string, number] = ["Cruzeiro", 2014];

alert(campeaoBrasileiro[0] + "-" + campeaoBrasileiro[1]);

let campeaoBrasileiro3: [string, number] = ["Palmeiras", 2016];
campeaoBrasileiro3[0] = "teste";

alert(campeaoBrasileiro3);
