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
