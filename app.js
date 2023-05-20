// Criei um evento que quando a pagina do html e o css for carregada, vai executar o bloco da function()
// Peguei o elemento e armazenei na variavel btn
document.addEventListener('DOMContentLoaded', function(){ 
    let btn = document.querySelector('#btn');

    // Criei um evento de 'mouseover' quando o ponteiro do mouse do usuario passar em cima do elemento(btn) vai mudar a cor de fundo(background)
    btn.addEventListener('mouseover', function() {
        this.style.backgroundColor = "#b239fd" 
    });
    // Criei um evento de 'mouseout' quando o ponteiro do mouse do usuario sair de cima do elemento(btn) vai mudar a cor de fundo(background)
    btn.addEventListener('mouseout', function() {
        this.style.backgroundColor = "#A020F0"
    });
});
// Chamei a função gerar() que é o evento onclick="gerar()" que está no html
// adicionei a variavel body(corpo do html), não precisava eu usar id mas usei. Coloquei o elemento #body armazenado na variavel body
// adicionei uma variavel res para armazenar o elemento #frases do html
// adicionei uma variavel textRandom(Isso vai pegar frases aleatorias da array frases), Math.floor ele vai converter para inteiro e vai arredondar
// o numero do Math.random para baixo exemplo: (2.9 vai arredondar pra 2). Math.random vai me dar numeros aleatorios(no meu caso strings aleatorias)
// e multipliquei por frases.length! Fiz a mesma coisa com o colorRandom

// Depois peguei o body.style.backgroundColor = cores[colorRandom]; = Quando o usuario clicar no botão(gerar) vai mudar as frases aleatoriamente e
// o background também. res.textContent = frases[textRandom] = Quando o usuario clicar no botão(gerar) vai gerar frases aleatoriamente
function gerar() {
    let body = document.querySelector('#body');
    let res = document.querySelector('#frases');
    let textRandom = Math.floor(Math.random() * frases.length);
    let colorRandom = Math.floor(Math.random() * cores.length);

    body.style.backgroundColor = cores[colorRandom];
    res.textContent = frases[textRandom];

    // Aqui o botão estava mudando de posição ao clicar pra mudar, então armazenei o elemento #btn na variavel btn e coloquei a posição como fixed
    // left = "586px" e top = "307px"
    let btn = document.querySelector('#btn');
    btn.style.position = "fixed";
    btn.style.left = "586px"
    btn.style.top = "307px"
}

// constancia frases = [] é uma array, criei ela para colocar frases motivacionais
const frases = [
    "Acredite em si mesmo e todo o resto vai se encaixar. Tenha fé em seus próprios poderes, incluindo sua capacidade de se curar, de se amar e de seguir em frente. - Chögyam Trungpa",
    "O único limite para o seu crescimento é você mesmo. Você deve se esticar além dos seus limites, porque é lá que está o sucesso - Brian Tracy",
    "Lembre-se: todos os dias você acorda é uma nova chance. Você tem a chance de mudar sua vida para melhor. Aproveite ao máximo! - Unknown",
    "Lembre-se: o único lugar em que o sucesso vem antes do trabalho é no dicionário. - Vidal Sassoon",
    "O fracasso é apenas a oportunidade de começar de novo, de forma mais inteligente. - Henry Ford",
    "A jornada de mil milhas começa com um único passo. - Lao Tzu",
    "Quanto maior a dificuldade, maior a glória. - Marcus Tullius Cicero",
    "Não espere por uma oportunidade. Crie-a. - Unknown",
    "A persistência é o caminho do êxito. - Charles Chaplin",
    "Nunca é tarde demais para ser o que você poderia ter sido. - George Eliot",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
    "Acredite em si mesmo e todo o resto se encaixará. - Unknown",
    "O único limite para o seu crescimento é você mesmo. - Unknown",
]
// constancia cores =[] é uma array, criei ela para adicionar várias cores
const cores = ["#008000","black", "#2F4F4F", "#008080", "#00CED1", "#4682B4", "#4169E1", "#6A5ACD", "#4F4F4F"]