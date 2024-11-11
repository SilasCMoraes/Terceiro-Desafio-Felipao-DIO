// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Define o tipo de ataque com base no tipo do herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido';
        }

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const nome = 'Aragorn';
const idade = 30;
const tipo = 'guerreiro';

// Cria uma instância da classe Heroi
const heroi = new Heroi(nome, idade, tipo);

// Chama o método atacar
heroi.atacar();
