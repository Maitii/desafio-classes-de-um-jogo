class Personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataques = {
            maga: 'usou magia',
            guerreira: 'usou espada',
            monja: 'usou artes marciais',
            ninja: 'usou shuriken'
        };

        let ataque = ataques[this.tipo];

        if (ataque) {
            console.log(`A ${this.tipo} atacou usando ${ataque}`);
        }
    }
}

let PersonagemMaga = new Personagem('Morgana', 230, 'maga');
let PersonagemGuerreira = new Personagem('Xena', 35, 'guerreira');
let PersonagemMonja = new Personagem('Coen', 92, 'monja');
let PersonagemNinja = new Personagem('Yuki', 23, 'ninja');

PersonagemMaga.atacar(); 
PersonagemGuerreira.atacar(); 
PersonagemMonja.atacar(); 
PersonagemNinja.atacar(); 