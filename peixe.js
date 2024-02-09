var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho; //declara a variável peixinho

function preload() {//function preload utilizado para carregar as imagens e elementos do jogo
    this.load.image('mar', 'assets/bg_azul-claro.png');//carregar o fundo
    this.load.image('logo', 'assets/logo-inteli_branco.png');//carregar a logo
    this.load.image('peixe', 'assets/peixes/peixe_amarelo.png');//carregar o peixe
    this.load.image('plantinha', 'assets/algas1.png');//carregar a plantinha1
    this.load.image('plantinha2', 'assets/algas2.png');//carregar a plantinha2
}

function create() {// function create utilizado para adicionar as imagens carregadas na função anterior ao jogo com as suas devidas escalas de localização
    this.add.image(400, 300, 'mar');//adiciona o mar
    this.add.image(400, 525, 'logo').setScale(0.5);//adiciona e coloca a logo em escala
    peixinho = this.add.image(400, 300, 'peixe');//direciona e adiciona a variável peixinho
    this.add.image(800, 525, 'plantinha');//adiciona a plantinha
    this.add.image(100, 550, 'plantinha2').setScale(0.5);//adiciona e coloca a plantinha2 em escala
}

function update() {//function update utilizado para fazer com que a localização do peixinho siga o cursor
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}