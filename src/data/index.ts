export interface Author {
  id: number;
  name: string;
  bio: string;
}

export interface Comment {
  id: number;
  postId: number;
  author: string;
  email: string;
  body: string;
  approved: boolean;
  date: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  authorId: number;
  date: string;
  readTime: string;
  tag: string;
}

export const AUTHORS: Author[] = [
  {
    id: 1,
    name: "Mariana Fontes",
    bio: "Crítica literária e ensaísta. Escreve sobre ficção contemporânea e a política da linguagem.",
  },
  {
    id: 2,
    name: "Rafael Cunha",
    bio: "Jornalista e escritor. Cobre cinema, arquitetura e a cultura das cidades.",
  },
  {
    id: 3,
    name: "Beatriz Lemos",
    bio: "Filósofa e professora. Interessa-se por ética, ecologia e pensamento feminista.",
  },
];

export const POSTS: Post[] = [
  {
    id: 1,
    title: "O silêncio como forma narrativa",
    excerpt:
      "Nas lacunas do texto, o leitor encontra mais do que o autor poderia dizer. Exploramos como escritores contemporâneos transformam a ausência em presença.",
    body: `Há uma tradição, nem sempre nomeada, de escritores que aprenderam a silenciar. Não por timidez nem por falta de palavras, mas porque descobriram que o branco da página carrega peso próprio.

Kafka sabia disso. As suas frases terminam onde o leitor esperava uma explicação, e é nesse vazio que o absurdo floresce. O silêncio não é falha narrativa — é arquitetura deliberada.

Entre os contemporâneos, o fenômeno persiste com novas roupagens. Jenny Offill fragmenta a narrativa de tal modo que os hiatos entre os fragmentos tornam-se o verdadeiro texto. O leitor preenche o espaço com a sua própria experiência, tornando-se coautor involuntário.

Este mecanismo exige muito do leitor e mais ainda do escritor. Saber o que omitir é mais difícil do que saber o que incluir. Cada silêncio deve ser calculado, carregado de intenção, para que não colapse em simples vazio.

A questão que persiste: num mundo de estímulo contínuo, temos ainda a capacidade de habitar o silêncio na leitura? Ou o branco da página tornou-se apenas mais um espaço vazio a preencher com ansiedade?

A resposta, ironicamente, talvez esteja naquilo que não dizemos quando tentamos responder.`,
    authorId: 1,
    date: "12 set. 2026",
    readTime: "6 min",
    tag: "Literatura",
  },
  {
    id: 2,
    title: "Brutalismo revisitado: a beleza do concreto exposto",
    excerpt:
      "O movimento que a crítica quis enterrar ressurge nas cidades como linguagem de honestidade material. O concreto nunca mentiu sobre o que era.",
    body: `O brutalismo nunca desapareceu de verdade. Foi apenas desacreditado — relegado ao rol dos erros do século XX, associado ao fracasso social dos grands ensembles franceses ou das torres britânicas em colapso.

Mas o concreto exposto sempre foi honesto. Ao contrário do pastiche pós-moderno que fingiu ser pedra ou tijolo quando era apenas revestimento, o béton brut não escondia a sua natureza. O que vês é o que há.

Esta honestidade material está a ser redescoberta por uma geração de arquitetos que cresceu a fotografar edifícios brutalistas abandonados e os encontrou belos precisamente pela sua recusa em agradar.

O Barbican em Londres, que durante décadas foi alvo de escárnio, é hoje patrimônio protegido e local de desejo. A sede do governo de Boston, projetada por Kallmann McKinnell & Knowles, que quase foi demolida nos anos 1990, está agora listada no registo histórico nacional.

O que mudou não foi o edifício. Mudámos nós — o nosso olhar, a nossa tolerância pela complexidade formal, a nossa suspeita do bonito fácil.

O brutalismo pede um tipo de atenção diferente. Não seduz à primeira vista. Exige tempo, presença, a disposição de ficar desconfortável antes de começar a compreender.

Talvez seja isso que precisamos agora mais do que nunca.`,
    authorId: 2,
    date: "8 set. 2026",
    readTime: "8 min",
    tag: "Arquitetura",
  },
  {
    id: 3,
    title: "Cuidado como prática filosófica",
    excerpt:
      "A ética do cuidado propõe uma inversão radical: em vez de princípios abstratos, relações concretas. Em vez de autonomia, interdependência.",
    body: `Carol Gilligan propôs, em 1982, uma ética fundada não em regras universais mas em relações particulares. A resposta da filosofia académica foi, durante décadas, de ceticismo: como pode uma ética fundada no particular ter validade universal?

A pergunta revelava o seu próprio pressuposto. A universalidade como critério de validade ética já é uma escolha filosófica, não um dado neutro. E é uma escolha que historicamente privilegiou certas formas de raciocínio sobre outras.

A ética do cuidado parte de outro lugar: da observação de que somos fundamentalmente vulneráveis e interdependentes. A ficção do sujeito autônomo que raciocina em abstracto sobre princípios morais é uma ficção útil em certos contextos, mas falha quando tentamos usá-la para compreender o que realmente fazemos quando cuidamos uns dos outros.

Cuidar de um filho doente, de um pai idoso, de um amigo em crise — estas experiências não se deixam capturar pelos conceitos de autonomia e princípio. Exigem presença, atenção, resposta ao particular, tolerância à incerteza.

Joan Tronto foi mais longe e mostrou que o cuidado não é apenas uma ética pessoal mas uma prática política. Quem cuida? De quem? Em que condições? Com que reconhecimento? Estas perguntas revelam hierarquias de poder que uma ética abstrata prefere ignorar.

A pandemia de 2020 tornou estas questões urgentes de um modo que a filosofia académica não podia mais ignorar. De repente, toda a gente percebeu que a sociedade funciona porque há pessoas — sobretudo mulheres — que cuidam, e que esse trabalho era invisível precisamente porque nunca entrou nas categorias do que conta como trabalho.

O cuidado como prática filosófica significa levar estas questões a sério — não apenas como tema de estudo, mas como forma de reorganizar o que consideramos valioso.`,
    authorId: 3,
    date: "3 set. 2026",
    readTime: "9 min",
    tag: "Filosofia",
  },
  {
    id: 4,
    title: "A última vez que o cinema nos surpreendeu",
    excerpt:
      "Há uma saudade específica de quando um filme nos apanhou completamente desprevenidos. Rastreamos esse sentimento até à sua origem.",
    body: `Existe um tipo de surpresa que o cinema raramente consegue mais — a surpresa total, a que te deixa sem fôlego porque não tinhas qualquer referência para o que acabaste de ver.

Não é nostalgia. É um problema estrutural do modo como consumimos cultura audiovisual hoje.

Antes de ver qualquer filme, já vimos o trailer em múltiplas versões, lemos as reações do Sundance, conhecemos o Rotten Tomatoes score, scrollámos críticas, vimos os clips que circulam nas redes. Chegamos à sala — se chegamos — com uma imagem pré-formada que o filme tem de confirmar ou negar.

A surpresa tornou-se difícil não porque os realizadores perderam talento mas porque o sistema de distribuição de informação tornou quase impossível chegar virgem a uma obra.

Há exceções. Hereditary chegou a muita gente sem aviso em 2018 — passado sem alarde pelo circuito de festivais, sem marketing de terror convencional, sem revelar no trailer aquilo que o filme de facto era. A reação foi visceral precisamente porque as pessoas não sabiam para o que olhar.

O que aprendemos com isso? Que a surpresa ainda é possível, mas exige uma espécie de curadoria inversa — saber deliberadamente menos, resistir à vontade de pesquisar, deixar que o tempo e a recomendação de uma pessoa em quem confias substituam o algoritmo.

É um ato quase político no contexto atual: escolher não saber.`,
    authorId: 2,
    date: "28 ago. 2026",
    readTime: "7 min",
    tag: "Cinema",
  },
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: "Pedro Saraiva",
    email: "pedro@exemplo.com",
    body: "Pensei exactamente nisto ao ler o último livro da Clarice. O silêncio entre as frases dela pesa de um modo que não sei explicar.",
    approved: true,
    date: "13 set. 2026",
  },
  {
    id: 2,
    postId: 1,
    author: "Ana Cristina",
    email: "ana@exemplo.com",
    body: "A referência ao Jenny Offill é certeira. Weather é exactamente isso — uma arquitectura de lacunas.",
    approved: true,
    date: "14 set. 2026",
  },
  {
    id: 3,
    postId: 2,
    author: "Tomás Braga",
    email: "tomas@exemplo.com",
    body: "Moro perto do Barbican e é fascinante ver como as pessoas olham para ele agora vs. há 20 anos. Genuinamente diferente.",
    approved: true,
    date: "9 set. 2026",
  },
  {
    id: 4,
    postId: 3,
    author: "Sofia Mendes",
    email: "sofia@exemplo.com",
    body: "O ponto sobre a pandemia é crucial. Foi o momento em que a invisibilidade do trabalho de cuidado finalmente ficou exposta.",
    approved: true,
    date: "4 set. 2026",
  },
];
