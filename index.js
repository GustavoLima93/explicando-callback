/**
 * 0 Obter um uusario
 * 1 Obter o numero de telefone de um uusario a partir de seu id
 * 2 Obter o endereco do usuario pelo id
 */

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Snoop Dog",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(id, callback) {
  setInterval(() => {
    return callback(null, {
      telefone: "1199002",
      ddd: 11
    });
  }, 2000);
}

function obterEndereco(id, callback) {
  setInterval(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    });
  }, 2000);
}



obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("Deu ruim em usuario", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("Deu ruim em telefone", error);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error("Deu ruim em endereco", error);
        return;
      }
      console.log(`
      nome:${usuario.nome}, 
      endereco:${endereco.rua}, ${endereco.numero},
      telefone:(${telefone.ddd})${telefone.telefone}`);
    });
  });
});

//const telefone = obterTelefone(usuario.telefone);
