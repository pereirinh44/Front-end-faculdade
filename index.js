import chalk from "chalk";

console.log("aura")
const texto = "salve seu gordura pura";
const palavras = texto.split(" ");
const coresArcoIris = [
    chalk.rgb(255, 0, 0), // Vermelho
    chalk.rgb(255, 127, 0), // Laranja
    chalk.rgb(255, 255, 0), // Amarelo
    chalk.rgb(0, 255, 0), // Verde
    chalk.rgb(0, 0, 255), // Azul
    chalk.rgb(75, 0, 130), // Índigo
    chalk.rgb(148, 0, 211), // Violeta
];

const textoColorido = palavras
    .map((palavra, index) => {
        const cor = coresArcoIris[index % coresArcoIris.length];
        return cor(palavra);
    })
    .join(" ");

console.log(textoColorido);