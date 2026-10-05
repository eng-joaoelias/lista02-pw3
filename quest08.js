function simulaPromise(sucesso) {
  const promessa = new Promise((resolve, reject) => {
    if (sucesso) {
      resolve("ok");
    } else {
      reject("not ok");
    }
  });

  promessa
    .then((mensagemSucesso) => {
      console.log(mensagemSucesso);
    })
    .catch((mensagemErro) => {
      console.log(mensagemErro);
    });
}

simulaPromise(false);
simulaPromise(true);