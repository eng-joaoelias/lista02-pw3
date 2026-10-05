function simulaPromise(sucesso, delay) {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) {
        resolve("ok");
      } else {
        reject("not ok");
      }
    }, delay);
  });

  promessa
    .then((mensagemSucesso) => {
      console.log(mensagemSucesso);
    })
    .catch((mensagemErro) => {
      console.log(mensagemErro);
    });
}

simulaPromise(false, 1000);
simulaPromise(true, 2000);