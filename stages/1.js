function execute(client, message) {
    function send(value) {
        client.sendText(message.from, value)
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

    switch (message.body.toLowerCase()) {
        case '1':
            send(`Como franqueado Empresta, você consegue oferecer crédito consignado, crédito pessoal, cartão de crédito consignado, consórcio, financiamento de veículo, refinanciamento imobiliário e seguro.`);
            break;
        case '2':
            send(`Ao adquirir uma Franquia Empresta, você recebe apoio na definição do ponto comercial, na seleção da equipe de vendas, e na montagem e inauguração da loja. Além disso, te ajudamos a estruturar o plano de negócios e oferecemos suporte comercial, operacional, estratégico e de qualidade permanentemente durante toda a parceria.`);
            break;
        case '3':
            send(`A Franquia Empresta pode ser aberta em qualquer cidade do país.`);
            break;
        case '4':
            send(`A Franquia Empresta possui mais de 90 unidades espalhadas pelo Brasil em diversos estados e no Distrito Federal, como no Rio Grande do Norte, São Paulo, Minas Gerais, Pernambuco e outros.`);
            break;
        case '5':
            send(`O cartão de crédito consignado é voltado para aposentados e pensionistas do INSS e servidores públicos. Não possui anuidade, tem taxa de juros reduzida e ainda há a possibilidade de sacar até 95% do limite de crédito disponível. O valor mínimo da fatura é descontado da folha de pagamento.`);
            break;
        case '6':
            send(`Portabilidade é a transferência do contrato de empréstimo de uma instituição financeira para outra, de forma que seja benéfica para o contratante. O novo contrato não pode possuir valor e prazo maiores que os do contrato original.`);
            break;
        case '7':
            send(`Crédito consignado para aposentados e pensionistas do INSS e servidores públicos. Empréstimos com taxa de juros reduzida e prazo de até 72 meses para pagar, com as prestações descontadas diretamente na folha de pagamento do salário ou benefício previdenciário do contratante.`);
            break;
        case '8':
            send(`Beleza, sobre qual assunto você quer falar?`);
        case 'cancelar':
            send(`Ok. Obrigado pelo seu contato! 👋`);
            localStorage.setItem(message.from, 0);
            break;
        default:
            const mensagens = [
                'Ops! Não entendi o que você disse 🤔', 
                `*Escolha uma das opções abaixo para que eu possa te ajudar: 
                \n1 - Quais são os produtos da Franquia Empresta?
                \n2 - Que tipo de suporte a Empresta oferece aos novos franqueados?
                \n3 - Onde posso abrir uma Franquia Empresta?
                \n4 - Quantas unidades da Franquia Empresta existem?
                \n5 - Cartão de Crédito consignado
                \n6 - Portabilidade
                \n7 - Empréstimo Consignado
                \n8 - Outros assuntos*`
            ]
            mensagens.map((value) => {
                send(value);
            });
            break;
    }
}

exports.execute = execute;