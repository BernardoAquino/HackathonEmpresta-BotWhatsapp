const stages = {
    0: {
        "descricao": "Boas Vindas",
        "file": require('./stages/0')
    },
    1: {
        "descricao": "Opções",
        "file": require('./stages/1')
    }
}

module.exports = stages;