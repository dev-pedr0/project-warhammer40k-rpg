const Talent = require('../models/Talent');

//current list of existing talents. Able to create more
const talentData = [
    {
        talentName: "Ambidestria",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Agilidade 30",
            }
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Habilidade Balística",
            },
        ],
        talentText: {
            description: "Não fornece bônus. Quando combinado com Combater com Duas Armas reduz a penalidade de atacar com as duas armas para -10",
        },
    },
    {
        talentName: "Luta às Cegas",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Percepção 30",
            }
        ],
        talentAptitude: [
            {
                name: "Percepção",
            },
            {
                name: "Sobrevivência",
            },
        ],
        talentText: {
            description: "O personagem ignora todas as penalidades ao lutar corpo a corpo sofrendo de visão obscurecida",
        },
    },
    {
        talentName: "Queda Leve",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Agilidade 30",
            }
        ],
        talentAptitude: [
            {
                name: "Agilidade",
            },
            {
                name: "Sobrevivência",
            },
        ],
        talentText: {
            description: "O personagem reduz o dano de queda em metros iguais ao BA (bônus de agilidade). Também adiciona +20 em testes de Acrobacia para a ação Pular",
        },
    },
    {
        talentName: "Pistas das Multidões",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Socialização 30",
            }
        ],
        talentAptitude: [
            {
                name: "Geral",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "Uma vez por dia pode re-rolar um teste feito para conseguir informações de um grupo de pessoas",
        },
    },
    {
        talentName: "Duro de Matar",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Vontade 40",
            }
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "Quando o personagem for ganhar um nível de Fadiga pela condição de Perda de Sangue ele pode fazer um teste de Vontade (+0). Se for bem-sucedido não recebe o ponto de Fadiga",
        },
    },
    {
        talentName: "Desarmar",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Agilidade 30",
            }
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem pode usar uma ação padrão e fazer um teste contrário de Habilidade Combate. Caso seja bem-sucedido o oponente solta a arma no chão. Caso o personagem consiga 3 graus de sucesso ele pode ter a arma desarmada em sua mão livre",
        },
    },
    {
        talentName: "Trabalho em Equipe",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            }
        ],
        talentAptitude: [
            {
                name: "Geral",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Caso o personagem esteja em maior número que o inimigo, além do benefício normal recebe +10 em testes de Habilidade de Combate. Se todos os personagens em maior número possuírem esse talento, o bônus passa a ser de +20",
        },
    },
    {
        talentName: "Inimigo",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            }
        ],
        talentAptitude: [
            {
                name: "Geral",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "O personagem tem -10 em Socialização e Influencia contra o grupo selecionado da Especialização. Esse talento não pode ser escolhido, apenas fornecido pelo Mestre",
            specialist: "Administratum, Adeptus Arbites, Adeptus Astartes, Adeptus Astra Telepathica, Adeptus Mechanicus, Adepta Sororitas, Atropatas, Capitães Mercantes, Collegia Titanicus, Carteis Criminosos, Deathwatch, Clero, Cultos Hereges, Guarda Imperial, Marinha Imperial, Inquisição, Navegadores, Officio Assassinorum, Rogue Traders, Schola Progenium, Scholastica Psykana, Legiões Traidoras, Tiranos",
        },
    },
    {
        talentName: "Invocar Ferro",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Implantes Férricos",
            },
            {
                name: "Implantes Mechanicus",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "Pode atrair para si até 2 quilogramas por BV (bônus de vontade) de metal não carregados a até 40 metros",
        },
    },
    {
        talentName: "Frenesi",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Força",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "O personagem pode gastar uma rodada completa. Na próxima rodada ele ganha +10 em testes de habilidade de Combate, Força, Resistência e Vontade, mas recebe -20 em testes de Habilidade Balística, Inteligência e Socialização. Ele é imune a efeitos de Medo, Preso, Atordoado, Fadiga, mas não pode Bloquear, recuar, fugir ou usar poderes psíquicos. Enquanto nesse estado o personagem precisa atacar ou se aproximar do inimigo mais próximo. O efeito segue pela duração do combate. Ao finalizar o combate o personagem deve fazer um teste de Vontade, caso falhe continuar a atacar novos alvos. A cada turno falho o personagem ganha +10 no teste de Vontade. Ao ser bem-sucedido não pode entrar em Frenesi novamente por uma hora",
        },
    },
    {
        talentName: "Mandíbula de Ferro",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Resistência 40",
            },
        ],
        talentAptitude: [
            {
                name: "Resistência",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "Ao ganhar a condição Atordoado o personagem pode fazer um teste de Resistência (+0) como uma Ação Livre para ignorar os efeitos",
        },
    },
    {
        talentName: "Saturado",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Vontade 40",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem ganha pontos de Insanidade ou faz testes de Medo apenas contra efeitos não naturais (Imaterium, Demônios...)",
        },
    },
    {
        talentName: "Intuição Precisa",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Inteligência 35",
            },
        ],
        talentAptitude: [
            {
                name: "Percepção",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "Ao falhar em um teste de Investigação o personagem pode tentar novamente com penalidade de -10",
        },
    },
    {
        talentName: "De Pé",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Agilidade 30",
            },
        ],
        talentAptitude: [
            {
                name: "Geral",
            },
            {
                name: "Agilidade",
            },
        ],
        talentText: {
            description: "O personagem pode se levantar como uma Ação Livre",
        },
    },
    {
        talentName: "Sem Ter Onde Se Esconder",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Percepção 30",
            },
        ],
        talentAptitude: [
            {
                name: "Percepção",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Ao causar dano em uma cobertura o personagem adiciona seus graus de sucesso no ataque para reduzir a armadura da cobertura. Caso use uma arma que não precisa de teste, adiciona 1",
        },
    },
    {
        talentName: "Camaradagem",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Socialização 30",
            },
        ],
        talentAptitude: [
            {
                name: "Socialização",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "O personagem ganha + 10 em testes de Socialização e Influência com o grupo selecionado. O personagem ganha +1 de Influência",
            specialist: "Administratum, Adeptus Arbites, Adeptus Astartes, Adeptus Astra Telepathica, Adeptus Mechanicus, Adepta Sororitas, Atropatas, Capitães Mercantes, Collegia Titanicus, Carteis Criminosos, Deathwatch, Clero, Cultos Hereges, Guarda Imperial, Marinha Imperial, Inquisição, Navegadores, Officio Assassinorum, Rogue Traders, Schola Progenium, Scholastica Psykana, Legiões Traidoras, Tiranos",
        },
    },
    {
        talentName: "Reação Rápida",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Socialização",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "Pode sacar uma Pistola, ou Arma Básica, ou arma corpo a corpo de uma mão, como ação livre",
        },
    },
    {
        talentName: "Resistente",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Resistência",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem recebe +10 ao fazer teses para resistir ao elemento da especialização",
            specialist: "Frio, Medo, Calor, Veneno, Poderes Psíquicos, Radiação, Vácuo, Outro",
        },
    },
    {
        talentName: "Constituição Sólida",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Geral",
            },
            {
                name: "Resistência",
            },
        ],
        talentText: {
            description: "O personagem ganha 1 ponto de vida. O talento pode ser escolhido múltiplas vezes, cada vez ganhando 1 ponto de vida",
        },
    },
    {
        talentName: "Derrubada",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Ao fazer um ataque o personagem pode informar que quer realizar uma derrubada. Caso o ataque seja bem sucedido e cause ao menos 1 de dano, o ataque não causa dano e o oponente deve fazer um teste de Resistência (+0) ou ser Atordoado por 1 rodada e ser derrubado. Ao fazer uma ação de Atordoar o personagem não recebe a penalidade de -20",
        },
    },
    {
        talentName: "Talento Técnico",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Inteligência 30",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "Uma vez por rodada o personagem pode realizar a ação de Destravar a arma como Ação Simples",
        },
    },
    {
        talentName: "Sentir o Imaterium",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Psi-nível",
            },
            {
                name: "Senso Psíquico",
            },
            {
                name: "Percepção 30",
            },
        ],
        talentAptitude: [
            {
                name: "Percepção",
            },
            {
                name: "Psíquico",
            },
        ],
        talentText: {
            description: "O personagem pode fazer um teste de Sentido Psíquico como uma Ação Livre. O personagem também consegue detectar efeitos psíquicos e entidades de forma passiva",
        },
    },
    {
        talentName: "Tecnólogo de Armas",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "Uso Tecnológico +10",
            },
            {
                name: "Inteligência 40",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "Uma vez por combate, como uma Ação Livre, o personagem pode aprimorar uma arma de Melta, Plasma, Energia ou Exótico que ele esteja usando. Isso aumenta o dano e penetração igual ao BI (bônus de inteligência) até o final da rodada",
        },
    },
    {
        talentName: "Treinamento com Armas",
        talentLevel: 1,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Geral",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "O personagem pode usar todas as armas com a classe: Pistola, Básica, Corpo a Corpo, Lançamento e Veículo dentro do grupo da Especialização",
            specialist: "Bolt, Corrente, Incendiária, Pesada, Las, Lançador, Melta, Plasma, Energia, Arcaica, Choque e Projetil Sólido",
        },
    },
    {
        talentName: "Mestre de Armaduras",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Inteligência 35",
            },
            {
                name: "Uso Tecnológico",
            },
            {
                name: "Negócio (Armas)",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "O personagem pode gastar 1 hora por dia e receber um bônus de armadura para distribuir igual ao seu BI (bônus de Inteligência). O bônus dura apenas enquanto o personagem estiver usando a armadura",
        },
    },
    {
        talentName: "Fúria de Batalha",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Frenesi",
            },
        ],
        talentAptitude: [
            {
                name: "Força",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "Pode Bloquear em Frenesi e pode re-rolar testes falhos para sair ou entrar no Frenesi",
        },
    },
    {
        talentName: "Braços Fortes",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Força 45",
            },
        ],
        talentAptitude: [
            {
                name: "Força",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "O personagem pode usar os tiros sem-auto e auto sem realizar a ação Empunhadura e a penalidade de -30. Ao usar a ação Carregar Peso, pode adicionar +20 no teste",
        },
    },
    {
        talentName: "Combater Multidões",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade de Combate 30",
            },
        ],
        talentAptitude: [
            {
                name: "Força",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Oponentes não ganham benefícios por estarem em maior número",
        },
    },
    {
        talentName: "Vigilância Constante",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Inteligência ou Percepção 35",
            },
            {
                name: "Atenção +10",
            },
        ],
        talentAptitude: [
            {
                name: "Percepção",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem pode rolar iniciativa com a Característica da Especialização e rola dois dados ao invés de um (pegando o valor maior)",
            specialist: "Deve escolher a Especialização Inteligência ou Percepção",
        },
    },
    {
        talentName: "Rede de Contatos",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Encobrir",
            },
            {
                name: "Inteligência 35",
            },
        ],
        talentAptitude: [
            {
                name: "Socialização",
            },
            {
                name: "Liderança",
            },
        ],
        talentText: {
            description: "O personagem pode fazer um teste de Socialização ao invés de Influência em testes de Requisição",
        },
    },
    {
        talentName: "Interrogatório Coordenado",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Força ou Vontade 40",
            },
            {
                name: "Pistas das Multidões",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "O personagem ganha +10 em testes de Interrogação e +5 para cada outro personagem no interrogatório com o mesmo talento",
        },
    },
    {
        talentName: "Contra-Ataque",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade de Combate 40",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "Uma vez por turno, após realizar um Bloqueio pode realizar um Ataque Simples usando a arma que usou no Bloqueio com uma penalidade de -20",
        },
    },
    {
        talentName: "Encobrir",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Inteligência 35",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Conhecimento",
            },
        ],
        talentText: {
            description: "Com a permissão do Mestre o personagem pode descartar pontos de Influência para aumentar sua Discrição. Cada ponto gasto aumenta o valor em 1d5",
        },
    },
    {
        talentName: "Negar a Feitiçaria",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Vontade 35",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem pode usar Vontade em testes de Esquiva para evitar efeitos e ataques psíquicos. Caso o personagem seja bem-sucedido em desviar de um ataque em área ele não se move para fora da área, ele apenas não é afetado",
        },
    },
    {
        talentName: "Ataque Devastador",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade de Combate 35",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Após fazer um Ataque Total bem-sucedido o personagem pode fazer um segundo Ataque Total como uma ação livre com os mesmos bônus e penalidades do primeiro",
        },
    },
    {
        talentName: "Tiro Secundário",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Combater com Duas Armas",
            },
        ],
        talentAptitude: [
            {
                name: "Sutileza",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Caso acerte um ataque a distância contra um oponente e faça um segundo ataque a distância no mesmo turno, contra o mesmo oponente, ganha +20 no teste",
        },
    },
    {
        talentName: "Treinamento em Arma Exótica",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Sutileza",
            },
            {
                name: "Inteligência",
            },
        ],
        talentText: {
            description: "O personagem recebe treinamento na arma selecionada na especialização",
            specialist: "Pistola Grav, Rifle Grav, Pistola Agulha, Rifle Agulha, Pistola de Teia, Lança-Teia",
        },
    },
    {
        talentName: "Um Rosto no Povo",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Socialização 35",
            },
            {
                name: "Pistas das Multidões",
            },
        ],
        talentAptitude: [
            {
                name: "Socialização",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "O personagem pode usar Socialização ao invés de Furtividade em testes para seguir alguém",
        },
    },
    {
        talentName: "Alvo Difícil",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Agilidade 40",
            },
        ],
        talentAptitude: [
            {
                name: "Agilidade",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "Caso o personagem faça uma ação de Investida ou Corrida oponentes possuem -20 em testes de Habilidade Balística até o início do próximo turno do personagem",
        },
    },
    {
        talentName: "Robusto",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Resistência 40",
            },
        ],
        talentAptitude: [
            {
                name: "Resistência",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem sempre se recupera de dano como se tivesse Parcialmente Ferido",
        },
    },
    {
        talentName: "Ódio",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Social",
            },
        ],
        talentText: {
            description: "Ao enfrentar personagens do grupo da especialização o personagem ganha +10 em testes de Habilidade de Combate contra eles e precisa fazer um teste de Vontade (+0) para fugir ou se render do combate",
            specialist: "Space Marines do Caos, Demônios, Mutantes, Psíquicos, Alien (especificar), Administratum, Adeptus Arbites, Adeptus Astartes, Adeptus Astra Telepathica, Adeptus Mechanicus, Adepta Sororitas, Atropatas, Capitães Mercantes, Collegia Titanicus, Carteis Criminosos, Deathwatch, Clero, Cultos Hereges, Guarda Imperial, Marinha Imperial, Inquisição, Navegadores, Officio Assassinorum, Rogue Traders, Schola Progenium, Tiranos",
        },
    },
    {
        talentName: "Tiro em Movimento",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade Balística 40",
            },
            {
                name: "Agilidade 40",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Como uma Ação Padrão o personagem pode se mover todo seu movimento e fazer um único ataque com uma arma a distância. Caso o personagem possua o talento Combater com Duas Armas ele pode fazer dois ataques a distância, um com cada arma",
        },
    },
    {
        talentName: "Alvos Independentes",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade Balística 40",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Ao atirar com duas armas em uma única ação (usando o talento Combater com Duas Armas, por exemplo) os alvos não precisam estar a um máximo de 10 metros de distância",
        },
    },
    {
        talentName: "Ataque Certeiro",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade Balística ou Habilidade de Combate 40",
            },
            {
                name: "Percepção 35",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística ou Habilidade de Combate",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Ao fazer um ataque bem-sucedido (a distância ou corpo a corpo de acordo com a especialização) como parte de um Ataque Total, Investida, Ataque Normal, Atordoar, Tiro de Precisão o personagem impõe penalidades em testes de Esquiva e Bloqueio igual 10 * graus de sucesso no ataque",
            specialist: "Corpo a corpo (Habilidade de Combate) ou a distância (Habilidade Balística)",
        },
    },
    {
        talentName: "Ataque Inescapável",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade de Combate 50",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "No início de seus turnos o personagem pode gastar um Ponto de Destino e seus ataques corpo a corpo não podem ser desviados ou bloqueados",
        },
    },
    {
        talentName: "Choque de Luminens",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Implantes Mechanicus",
            },
            {
                name: "Capacitores de Luminen",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "O personagem sempre conta como tendo uma arma corpo a corpo que causa 1d10 + BV (bônus de Vontade) de Energia, com Penetração 0 e a qualidade Chocante. O personagem conta como tendo treinamento nessa arma e após cada ataque deve fazer um teste de Resistência para não sofrer 1 nível de Fadiga",
        },
    },
    {
        talentName: "Transcendência Maglev",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Implantes Mechanicus",
            },
            {
                name: "Bobinas Maglev",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "O personagem pode pairar no ar por 1d10 + 2* BV (bônus de Vontade) minutos. Ele pode se mover na sua velocidade de corrida usando uma Ação Simples e não sofre dano de queda caso as bobinas estejam ativas. As bobinas podem ser ativadas 2 vezes e então deve ser recarregada",
        },
    },
    {
        talentName: "Pontaria Precisa",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade Balística 35",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "O personagem não sofre penalidades ao atirar em distancias Longas ou Extremas",
        },
    },
    {
        talentName: "Uso de Mecandritos",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Implantes Mechanicus",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "O personagem ganha o Treinamento com Arma (Mecandrito – Arma) ou Treinamento com Arma (Mecandrito – Utilidade) de acordo com a especialização",
            specialist: "Arma, Utilidade",
        },
    },
    {
        talentName: "Assassino Preciso",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade Balística ou Habilidade de Combate 40",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística ou Habilidade de Combate",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Ao fazer a ação Tiro/Golpe Preciso com a especialização selecionada o personagem não ganha a penalidade de -20",
            specialist: "A distância, corpo a corpo",
        },
    },
    {
        talentName: "Prosanguíneo",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Implantes Mechanicus",
            },
            {
                name: "Implantes Auto Sanguíneos",
            },
        ],
        talentAptitude: [
            {
                name: "Resistência",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "O personagem precisa gastar 10 minutos e um testes de Uso Tecnológico (+0). Caso seja bem-sucedido ele recupera 1d5 pontos de vida. Se rolar um 96 ou maior no teste seu Auto Sanguíneo fica sem funcionar por uma semana",
        },
    },
    {
        talentName: "Mente Fortalecida",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Vontade 30",
            },
            {
                name: "Resistente (Poderes Psíquicos)",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem pode re-rolar uma vez um teste de Vontade falho para resistir a Poderes Psíquicos que afetam a mente",
        },
    },
    {
        talentName: "Ataque Veloz",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade de Combate 30",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "O personagem pode fazer a ação Ataque Veloz",
        },
    },
    {
        talentName: "Combater Com Duas Armas",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate ou Habilidade Balística",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Caso o personagem esteja usando duas armas de uma mão corpo a corpo ou a distância (de acordo com a especialização), ao fazer um ataque que custa uma Ação Simples (Ataque Simples, a Ataque Veloz, Ataque Relâmpago, Tiro Simples, Semiautomático, Automático) o personagem pode fazer um segundo ataque como ação livre com os mesmos parâmetros do primeiro com sua segunda arma. Os dois ataques são feitos com -20 de penalidade",
            specialist: "Corpo a corpo, a distância"
        },
    },
    {
        talentName: "Especialista Desarmado",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Ambidestria",
            },
            {
                name: "Agilidade 35",
            },
            {
                name: "Habilidade de Combate 35",
            },
        ],
        talentAptitude: [
            {
                name: "Força",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Caso o personagem esteja usando duas armas de uma mão corpo a corpo ou a distância (de acordo com a especialização), ao fazer um ataque que custa uma Ação Simples (Ataque Simples, a Ataque Veloz, Ataque Relâmpago, Tiro Simples, Semiautomático, Automático) o personagem pode fazer um segundo ataque como ação livre com os mesmos parâmetros do primeiro com sua segunda arma. Os dois ataques são feitos com -20 de penalidade",
            specialist: "Corpo a corpo, a distância"
        },
    },
    {
        talentName: "Conduíte do Imaterium",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Psi-nível",
            },
            {
                name: "Mente Fortalecida",
            },
            {
                name: "Vontade 50",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Psíquico",
            },
        ],
        talentText: {
            description: "Ao Sobrecarregar, antes de rolar seu teste de Poder de Foco o personagem pode gastar 1 Ponto de Destino e adicionar 1d5 no seu Psi-nível efetivo. Ao fazer isso o personagem adiciona +30 na rolagem da tabela Fenômeno Psíquico",
        },
    },
    {
        talentName: "Tornado de Morte",
        talentLevel: 2,
        telentRequisite: [
            {
                name: "Habilidade de Combate 40",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Como Ação Simples o personagem pode realizar um Ataque Simples com uma arma corpo a corpo contra todos os oponentes na distância corpo a corpo do personagem até um máximo de seu BCA (bônus de combate com armas)",
        },
    },
    {
        talentName: "Fé de Adamante",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Saturado",
            },
            {
                name: "Resistente (Medo)",
            },
            {
                name: "Vontade 45",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "Pode reduzir seu BV (bônus de Vontade) nos graus de falhas em testes de Medo ou Preso. Se reduzir para zero ou menos conta como se tivesse sido bem-sucedido com 1 grau de sucesso",
        },
    },
    {
        talentName: "Movimento Assassino",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Agilidade 40",
            },
            {
                name: "Acrobacia",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Sobrevivência",
            },
        ],
        talentText: {
            description: "Após fazer um ataque corpo a corpo, pode fazer um teste moderdo (+0) de Acrobacia para se mover metade do deslocamento como Ação Livre uma vez por rodada. Essa ação não causa Ataques de Oportunidade",
        },
    },
    {
        talentName: "Bastião da Vontade de Ferro",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Psi-nível",
            },
            {
                name: "Mente Fortalecida",
            },
            {
                name: "Vontade 40",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Psíquico",
            },
        ],
        talentText: {
            description: "Personagem adiciona 5 * Psi-nível em qualquer teste para resistir a poderes psíquicos",
        },
    },
    {
        talentName: "Mestre da Lâmina",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Habilidade de Combate 30",
            },
            {
                name: "Treinamento em Armas (alguma corpo a corpo)",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Ao atacar com uma arma laminada pode re-rolar um ataque falho por rodada",
        },
    },
    {
        talentName: "Golpe Esmagador",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Habilidade de Combate 40",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "O personagem causa metade de seu BHC (bônus de habilidade de combate), arredondado para cima, como dano extra em seus ataques corpo a corpo",
        },
    },
    {
        talentName: "Anjo da Morte",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Habilidade de Combate ou Habilidade Balística 45",
            },
        ],
        talentAptitude: [
            {
                name: "Percepção",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Quando o personagem causar dano Crítico com uma arma da Especialização o personagem adiciona o BP (bônus de Percepção) ao dano",
            specialist: "Deve escolher a Especialização Habilidade de Combate (para armas corpo a corpo) ou Habilidade Balística (para armas a distância)",
        },
    },
    {
        talentName: "Interrogatório Delicado",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Socialização 50",
            },
            {
                name: "Interrogatório Coordenado",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "Caso um interrogatório fosse causar perda de Discrição, a perda é reduzida em 1d5. Se o resultado for um número negativo a Discrição aumenta em 1 ponto",
        },
    },
    {
        talentName: "Olhar Vingativo",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Habilidade Balística 50",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Antes de fazer um Ataque Simples o personagem pode gastar um Ponto de Destino. Ele adiciona seus graus de sucesso do ataque no dano e no valor de penetração",
        },
    },
    {
        talentName: "Favorecido Pelo Imaterium",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Vontade 35",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Psíquico",
            },
        ],
        talentText: {
            description: "Quando o personagem rola na tabela Fenômeno Psíquico, contanto que ele não receba um resultado de Perigos do Imaterium, ele pode rolar novamente e escolher qual resultado usar",
        },
    },
    {
        talentName: "Flash de Intuição",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Inteligência 40",
            },
            {
                name: "Rede de Contatos",
            },
            {
                name: "Interrogatório Coordenado",
            },
        ],
        talentAptitude: [
            {
                name: "Percepção",
            },
            {
                name: "Conhecimento",
            },
        ],
        talentText: {
            description: "Pode gastar 1 Ponto de Destino e receber uma pista sobre a investigação",
        },
    },
    {
        talentName: "Coroa de Comando",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Socialização",
            },
            {
                name: "Vontade 40",
            },
        ],
        talentAptitude: [
            {
                name: "Socialização",
            },
            {
                name: "Liderança",
            },
        ],
        talentText: {
            description: "Ao interagir com NPC’s usando habilidades com as aptidões Social ou Liderança ele pode afetar pessoas a uma quantidade de metros igual a 100 * BS (bônus de socialização)",
        },
    },
    {
        talentName: "Martelada",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Golpe Esmagador",
            },
        ],
        talentAptitude: [
            {
                name: "Força",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Ao usar Ataque Total para fazer um único ataque o personagem adiciona metade do BF (bônus de força) na penetração da arma e o ataque conta como tendo a qualidade Concussivo (2)",
        },
    },
    {
        talentName: "Conhecimento Infundido",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Inteligência 40",
            },
            {
                name: "Qualquer Conhecimento",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Conhecimento",
            },
        ],
        talentText: {
            description: "O personagem ganha todas as especializações de Conhecimento Comum e Conhecimento Escolástico no nível 1. Em testes bem-sucedidos desses conhecimento o personagem sempre adiciona mais um grau de sucesso",
        },
    },
    {
        talentName: "Ataque Relâmpago",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Ataque Veloz",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade de Combate",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "O personagem pode realizar a ação Ataque Relâmpago",
        },
    },
    {
        talentName: "Explosão de Luminens",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Choque de Luminens",
            },
            {
                name: "Capacitores de Luminen",
            },
            {
                name: "Implantes Mechanicus",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística",
            },
            {
                name: "Tecnologia",
            },
        ],
        talentText: {
            description: "O personagem sempre conta como tendo uma arma tipo Pistola com distância de 10m. Essa arma pode fazer apenas Tiros Únicos e causa 1d10 + 2*BV (bônus de Vontade) de Energia, com Penetração 0 e a qualidade Chocante. O personagem conta como tendo treinamento nessa arma e após cada ataque deve fazer um teste de Resistência para não sofrer 1 nível de Fadiga",
        },
    },
    {
        talentName: "Maestria",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Nível 4 na perícia de escolha",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Conhecimento",
            },
        ],
        talentText: {
            description: "O personagem pode gastar um Ponto de Destino para automaticamente obter sucesso na Perícia da especialização contanto que sua dificuldade seja +0 ou melhor. A quantidade de graus de sucesso é igual ao bônus da habilidade relacionada a perícia. O talento pode ser escolhido mais de uma vez, para perícias diferentes",
            specialist: "Deve ewscolher uma perícia nível 4",
        },
    },
    {
        talentName: "Tiro Potente",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Habilidade Balística 40",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "O personagem adiciona metade do seu BCB (bônus de Combate Balístico) no dano de ataques usando armas a distância",
        },
    },
    {
        talentName: "Imortal",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Vontade 50",
            },
            {
                name: "Resistência 50",
            },
        ],
        talentAptitude: [
            {
                name: "Resistência",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem pode gastar um Ponto de Destino para, durante o combate, ignorar efeitos de ferimentos (como Dano Crítico), Fadiga, Atordoamento, contato que o efeito não o mate imediatamente. O personagem não ignora o dano, apenas os efeitos negativos dele. Ao final do combate os efeitos são sentidos como normal",
        },
    },
    {
        talentName: "Velocidade Sobrenatural",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Habilidade de Combate 40",
            },
            {
                name: "Agilidade 50",
            },
        ],
        talentAptitude: [
            {
                name: "Agilidade",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "ao fazer a ação de Disparada o personagem pode andar o dobro da velocidade de Disparada",
        },
    },
    {
        talentName: "Arrancada",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "",
            },
        ],
        talentAptitude: [
            {
                name: "Agilidade",
            },
            {
                name: "Sobrevivência",
            },
        ],
        talentText: {
            description: "Ao realizar a ação Movimento Completo, pode se mover um número extra de metros igual ao BA (bônus de Agilidade). Ao usar uma ação de Corrida, pode se mover o dobro do movimento de Corrida. Caso tenha feito isso na rodada anterior, ganha 1 nível de Fadiga",
        },
    },
    {
        talentName: "Evasão Extra",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Agilidade 40",
            },
            {
                name: "Esquiva ou Bloqueio",
            },
        ],
        talentAptitude: [
            {
                name: "Agilidade",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "O personagem pode fazer um teste extra de Bloqueio e Esquiva uma vez por rodada",
        },
    },
    {
        talentName: "Cirurgião Superior",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Medicina Nível 2",
            },
        ],
        talentAptitude: [
            {
                name: "Inteligência",
            },
            {
                name: "Sobrevivência",
            },
        ],
        talentText: {
            description: "O personagem ganha +20 em todos os testes de Medicina. Ao realizar primeiros socorros o personagem ignora penalidades de Muito Ferido em pacientes e sofre apenas -10 ao tratar pacientes com Feridas Críticas",
        },
    },
    {
        talentName: "Seleção de Alvo",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Habilidade Balística 50",
            },
        ],
        talentAptitude: [
            {
                name: "Habilidade Balística",
            },
            {
                name: "Sutileza",
            },
        ],
        talentText: {
            description: "O personagem pode atirar em alvos em combate corpo a corpo. Caso realize a ação Mirar antes de atacar, as chances de acertar um aliado é 0",
        },
    },
    {
        talentName: "Atropelamento Devastador",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Força 50",
            },
        ],
        talentAptitude: [
            {
                name: "Força",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Ao fazer uma ação de Disparada pode fazer um teste oposto de Força contra qualquer um em seu caminho. Caso os alvos falhem eles são derrubados",
        },
    },
    {
        talentName: "Resistência Verdadeira",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Resistência 40",
            },
        ],
        talentAptitude: [
            {
                name: "Resistência",
            },
            {
                name: "Defensivo",
            },
        ],
        talentText: {
            description: "Ao sofrer Dano Crítico, reduz o valor pelo BR (bônus de resistência) do personagem (para o mínimo de 1 de dano crítico)",
        },
    },
    {
        talentName: "Maestria Com Duas Armas",
        talentLevel: 3,
        telentRequisite: [
            {
                name: "Agilidade 45",
            },
            {
                name: "Ambidestria",
            },
            {
                name: "Combater Com Duas Armas (corpo a corpo e a distância)",
            },
            {
                name: "Habilidade de Combate ou Habilidade Balística 40",
            },
        ],
        talentAptitude: [
            {
                name: "Sutileza",
            },
            {
                name: "Ofensivo",
            },
        ],
        talentText: {
            description: "Ao lutar com duas armas (cada uma sendo armas de uma mão) o personagem ignora a penalidade de -20",
        },
    },
    {
        talentName: "Trava do Imaterium",
        talentLevel: 3,
        telentRequisite: [
            {
                name: ": Psi-nível",
            },
            {
                name: "Mente Fortalecida",
            },
            {
                name: "Vontade 50",
            },
        ],
        talentAptitude: [
            {
                name: "Vontade",
            },
            {
                name: "Psíquico",
            },
        ],
        talentText: {
            description: "Uma vez por sessão o personagem pode ignorar um efeito da tabela Fenômeno Psíquico. O personagem sofre 1d5 de dano de Energia na Cabeça e não pode fazer testes de Poder de Foco ou manter poderes psíquicos até o início do seu próximo turno",
        },
    },
];

//Function that verify existing talents and add/update talents to the database
const insertTalents = async() => {
    try {
        for (const talent of talentData) {
            await Talent.findOneAndUpdate(
                { talentName: talent.talentName }, // Search talent by name
                { $set: talent }, // Data to be updated or added
                { upsert: true, new: true } // Added new talent or update it
            );
            //console.log(`${talent.talentName} inserido/atualizado com sucesso.`);
        }
    } catch (error) {
        console.error('Erro ao inserir roles:', error);
    }
}

module.exports = {
    insertTalents
};