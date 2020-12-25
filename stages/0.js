function execute(client, message) {
    const mensagens = [
        'Olá! Aqui é o bot de suporte da Empresta Acompanhamento. 🤖', 
        'Faço parte de um projeto piloto, por isso estou aprendendo algumas coisas ainda. 😉', 
        `*Escolha uma das opções abaixo para que eu possa te ajudar: 
        \n1 - Quais são os produtos da Franquia Empresta?
        \n2 - Que tipo de suporte a Empresta oferece aos novos franqueados?
        \n3 - Onde posso abrir uma Franquia Empresta?
        \n4 - Quantas unidades da Franquia Empresta existem?
        \n5 - Cartão de Crédito consignado
        \n6 - Portabilidade
        \n7 - Empréstimo Consignado
        \n8 - Outros assuntos*`, 
        'A qualquer momento, você pode cancelar o seu processo de atendimento enviando a palavra CANCELAR.'];

        mensagens.map((value) => {
            client.sendText(message.from, value)
            .then(localStorage.setItem(message.from, 1))
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        });
}

exports.execute = execute;