// Função para processar a escolha da bebida
function escolherBebida() {
    // Solicita a escolha da bebida ao cliente
    let bebida = prompt("Escolha uma bebida (café, leite ou chá):").toLocaleLowerCase();
    
    // Variável para armazenar o valor da bebida
    let valor;
    let opcaoValida = true;

    // Avalia a opção escolhida
    switch (bebida) {
        case "café":
            valor = 3.50;
            break;
        case "leite":
            valor = 2.50;
            break;
        case "chá":
            valor = 2.00;
            break;
        default:
            opcaoValida = false;
            console.log("Opção inválida. Escolha entre café, leite ou chá.");
            break;
    }

    // Se a opção for válida, exibe a mensagem personalizada
    if (opcaoValida) {
        console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
    }
}


