class VideoGame {
  constructor({nome, marca, anoLancamento, preco}) {
    this.nome = nome;
    this.marca = marca;
    this.anoLancamento = anoLancamento;
    this.preco = preco;
    this.ligado = false;
    this.jogosInstalados = [];
  }

  ligar() {
    if (this.ligado) {
      console.log(`O ${this.nome} já está ligado.`);
    } else {
      this.ligado = true;
      console.log(`Ligando o ${this.nome}... Pronto para jogar!`);
    }
  }

  desligar() {
    if (!this.ligado) {
      console.log(`O ${this.nome} já está desligado.`);
    } else {
      this.ligado = false;
      console.log(`Desligando o ${this.nome}...`);
    }
  }

  instalarJogo(nomeJogo) {
    if (this.jogosInstalados.includes(nomeJogo)) {
      console.log(`O jogo "${nomeJogo}" já está instalado.`);
    } else {
      this.jogosInstalados.push(nomeJogo);
      console.log(`Jogo "${nomeJogo}" instalado com sucesso no ${this.nome}!`);
    }
  }

  listarJogos() {
    if (this.jogosInstalados.length === 0) {
      console.log(`Nenhum jogo instalado no ${this.nome}.`);
    } else {
      console.log(`Jogos instalados no ${this.nome}: ${this.jogosInstalados.join(', ')}`);
    }
  }
}

class PlayStation extends VideoGame{
  constructor({nEntradasUSB, voltagem, adicionais, ...VideoGame}){
    super(VideoGame);
    this.nEntradasUSB = nEntradasUSB;
    this.voltagem = voltagem;
    this.adicionais = adicionais;
  }
}

const PS5 = new PlayStation({
  nome: "PlayStation 5",
  marca: "Sony",
  anoLancamento: 2020,
  preco: 4000,
  nEntradasUSB: 4,
  voltagem: 127,
  adicionais: ['Controle sem fio', 'Volante', 'Pedais']
});
PS5.ligar();
