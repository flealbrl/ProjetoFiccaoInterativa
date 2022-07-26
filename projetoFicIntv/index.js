const prompt = require('prompt-sync')();
console.clear();


///////// FUNÇÕES PRA COMPOR A HISTÓRIA /////////
// Função Ver o STATUS do Personagem //
function mostrarStatus(status){
    if(status === 1){
        console.log("Status Atual: ■ 20%");
    }else if(status === 2){
        console.log("Status Atual: ■■ 40%");
    }else if(status === 3){
        console.log("Status Atual: ■■■ 60%");
    }else if(status === 4){
        console.log("Status Atual: ■■■■ 80%  [ATENÇÃO !]");
    }else if(status === 5){
        console.log("Status Atual: ■■■■■ 100% [ALERTA !]" );
    }else{
        console.log("Status Atual:  ■ 10%")
    }
}

// Função exibição do Menu Interativo //
function mostrarMenuCompleto(){
    console.log();
    console.log("┌────── MENU ──────┐ ");
    console.log("├ 1 - SIM  ");
    console.log("├ 2 - NÃO");
    console.log("├ 3 - VER STATUS ");
    console.log("├ 4 - VER FORÇA ");
    console.log("├ 5 - VER RELÓGIO ");
    console.log("└──────────────────┘ ");
    console.log()
}

// Função exibir o MenuSN //
function mostrarMenuSN(){
    console.log();
    console.log("┌───── MENU ──────┐ ");
    console.log("├ 1 - SIM  ");
    console.log("├ 2 - NÃO");
    console.log("└──────────────────┘ ");
    console.log()
}

// Função Validação do Menu Completo //
function validacaoMenuCompleto(numeral){

    while(numeral <= 0 || numeral > 5){
        numeral = prompt("Opção Inválida, use entre 1 a 5 : ")

    }if(numeral == 1){
        console.log();             // Sim
    }else if(numeral == 2){
        console.log();             // Não
    }else if(numeral == 3){
        console.log("▼ Sede 💧 ▼");
        mostrarStatus(sedePers);        // Ver Sede
        console.log();
    
        console.log("▼ Fome 🍔 ▼");
        mostrarStatus(fomePers);        // Ver Fome
        console.log();
    
        console.log("▼ Sono 😴 ▼");
        mostrarStatus(sonoPers);        // Ver Sono
        console.log();
        validacaoMenuSN() //validação
    }else if(numeral == 4){
        console.log("▼ Força 💪 ▼");
        mostrarStatus(forcaPers)        // Ver Força
        validacaoMenuSN() //validação
    }else if(numeral == 5){
        console.log("▼ Relógio ⌚ ▼")  // Ver Dias
        console.log(`${contagemDia} dias a partir da sua jornada.`) 
        validacaoMenuSN() //validação
    }
}

// Função o MenuSN e faz sua validação //
function validacaoMenuSN(){                  
    mostrarMenuSN();
    perg1 = prompt("Escolha se aceita a pergunta anterior ou não: ");
    console.log()

    while(perg1 <= 0 || perg1 > 2){
        perg1 = prompt("Opção Inválida, use entre 1 a 2 : ");

    }if(perg1 == 1){
        console.log();              // Sim
    }else if(perg1 == 2){
        console.log();              // Não
    }
}
///////// FUNÇÕES PRA COMPOR A HISTÓRIA /////////


/////////// VARIAVEIS ///////////
// Const PERSONAGEM //
var nomePers = '';
var pergSexoPers = ""

// Var STATUS //
var forcaPers = 0;
let fomePers = 3;
let sedePers = 3;
let sonoPers = 4;

// Var DIA
var contagemDia = 0; // CONTAGEM DE DIAS PRA HISTÓRIA (6 DIA O MUNDO ACABA)
/////////// VARIAVEIS ///////////


// INICIAL - DADOS PERSONAGEM //
nomePers = prompt("Olá jogador, informe seu nome: ").trim().toUpperCase();

pergSexoPers = prompt(`OK, ${nomePers} ! Me informe se seu gênero é masculino, feminino ou outros: `).trim().toUpperCase();

while(pergSexoPers != "MASCULINO"  && pergSexoPers != "FEMININO" && pergSexoPers != "OUTROS") {
    console.log("Gênero inválido.");
    sexoPers = prompt(`${nomePers} ! Me informe se seu gênero é masculino, feminino ou outros: `).trim().toUpperCase();

    if(pergSexoPers == "MASCULINO"){
        forcaPers += 5;
        }else if(pergSexoPers == "FEMININO" || pergSexoPers == "OUTROS"){
        forcaPers += 4;
    }
}


// INICIAL - HISTÓRIA E PERGUNTAS //
    console.clear();
    console.log(`${nomePers} ano é 1939, o mundo está um caos, tiros, explosões, aviões e muitas mortes.`);
    console.log("O início da 2 Guerra Mundial assombra os 4 cantos do planta terra...");
    console.log("Você é um (a) cientista/fisico(a)/nuclear e teorico(ã) alemã(o), saindo fugido(a) do seu pais natal devido perseguição judeia, afinal, Hitler está no auge do seu imperio.");
    console.log("Ao chegar nos EUA, no aeroporto você encontra um grande amigo. Você vai até ele conversar?");

    mostrarMenuCompleto(); // Chama o Menu COMPLETO.
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1); // Chama a validação do MenuCompleto, chama o MenuSN e validação se necessário.

    console.clear();


    //// CONVERSA COM O SPENCER ///////////
if (perg1 == 1){ /////// P 1.0
    console.log("Você foi até o Spencer conversar.");
    console.log("Papo pra cá e papo pra lá, vocês chegam ao assunto de trabalho.");
    console.log(`O Spencer fala: Muito bom te ver, ${nomePers}, está trabalhando onde ?`);
    console.log(`Você ira falar a verdade pra o Spencer ?`);

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

    if(perg1 == 1){     /////// P 1.1
        console.log("Você fala a verdade para o Spencer e ele te convida pra trabalhar na NuclearTECH.");
        console.log("Uma empresa Governamental dos EUA muito renomada mundialmente.");
        console.log("Você fica muito euforico, mas não transparece pra o Spencer, afinal você é Alpha.");
        console.log("Então Spencer fala: Então cara, você aceita ou é muito pra você, rsrs... ?");

        mostrarMenuCompleto();
        var perg1 = prompt("Escolha entre as opções: ");
        validacaoMenuCompleto(perg1);

        if(perg1 == 1){     /////// P 1.1.2
            console.log("Você aceita a proposta e agradeçe muito ao Spencer.");
            console.log("Spencer lhe informa que devido a guerra tera que começar amanhã as 7h.");
            console.log("Você se espanta mais fica agradecido e fala que ira aparecer.");
            console.log("Spencer lhe oferece carona pra o Hotel, você aceita?");

            mostrarMenuCompleto();
            var perg1 = prompt("Escolha entre as opções: ");
            validacaoMenuCompleto(perg1);

            if (perg1 == 1){
                console.log("Spencer te deixa no hotel, você agradeçe e sai do carro.");

            } else if(perg1 ==2 ){
                console.log("Você vai pra o TAXI que ira te levar pra o HOTEL.");
            }

        }else if(perg1 == 2){     /////// P 1.1.2
            console.log("Você é um bobão e não aceita a proposta do emprego dos sonhos.");
            console.log("Spencer vê que você está um pouco e fala: Pensa bem...");
            console.log("Você aceita e Spencer aperta sua mão e sai.");
            console.log("Você vai pra o TAXI que ira te levar pra o HOTEL.");
        }



    } else if (perg1 == 2){     /////// P 1.1
        console.log("Você não falou a verdade para o Spencer, e mentiu dizendo que está a passeio na terra do sonho perfeito. (EUA) ");
        console.log("Spencer te entende e te convida pra ir almoçar amanhã na casa dele.");
        console.log("Mas gostaria de trabalhar um pouco também.")
        console.log("Te passa o endereço: St. New Orleans 330 FL ");
        console.log("Você, anota o endereço, responde que está muito ocupado. Mas aceitaria o convite?");

        mostrarMenuCompleto();
        var perg1 = prompt("Escolha entre as opções: ");
        validacaoMenuCompleto(perg1);

        if(perg1 == 1){     /////// P 1.1.2
            console.log("Sim, Spencer. Anotado e aceito seu convite.");
            console.log("Voces trocam telefons e cada um vai pra um canto.");
            console.log("Você vai pra o TAXI que ira te levar pra o HOTEL.");

        }else if(perg1 == 2){     /////// P 1.1.2
            console.log("Você agradeçe mas recusa o convite do Spencer.");
            console.log("Sua desculpa é o excesso de tarefas pra fazer.");
            console.log("Os 2 se comprimentam e cada um vai pra um lado.");
            console.log("Você vai pra o TAXI que ira te levar pra o HOTEL.");
        }
    }

    //// CONVERSA COM O SPENCER ///////////


    //// PASSOU DIRETO DO SPENCER ///////////
}else if (perg1 == 2){     /////// P 1.0
    console.log("Você passa direto pelo Spencer fingindo que não o viu.");
    console.log("Você está indo em direção a saida do aeroporto.");
    console.log("Quando passa em frente a uma loja de alimentos, deseja se aproximar ?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

    } if(perg1 == 1){     /////// P 1.1
        console.log("Você para comer um lanche, afinal, você chegou agora de um voo longo.");
        console.log("Ao se aproximar você verificar os valores e se interessa em um Hamburger de $25.");
        console.log("Acha o valor um pouco caro, mas isso não é problema pra você.");
        console.log("O atendente te questiora, o Sr. ira querer 1 ?");

        mostrarMenuCompleto();
        var perg1 = prompt("Escolha entre as opções: ");
        validacaoMenuCompleto(perg1);

        if(perg1 == 1){
            console.log("Você solicita ao atendente um hambuger caprichado e uma coca-cola.");
            fomePers = 0
            sedePers = 0
            console.log("Ao se saciar, você paga e sai do restaurante.");
            console.log("Você vai pra o TAXI que ira te levar pra o HOTEL.");

        } else if(perg1 = 1){
            console.log("Você agradeçe ao atendente mas não solicita nada pra se alimetar.");
            console.log("Sendo assim, você sai do restaurante.");
            console.log("E vai pra o TAXI que ira te levar pra o HOTEL.");
        }

    } else if (perg1 == 2){     /////// P 1.1
        console.log("Ok, você está com muita pressa e vai em direção a saida do aeroporto.");
        console.log("Você vai pra o TAXI que ira te levar pra o HOTEL.");
}
    //// PASSOU DIRETO DO SPENCER ///////////


    console.log("Você chega ao Hotel.")
    console.log("Ao chegar no Hotel, você está muito cansado é só pensa em ir pro quarto.")
    console.log("Você caminha até ao elevador mas nota algo estranho.")
    console.log("Identifica uma movimentação suspeita de um pessoal com roupas da NuclearTECH.")
    console.log("Você identifica essa empresa? ")

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
        


    //// SIM IDENTIFICA ///////////
if (perg1 == 1){ /////// P 2.0
    console.log("Sim, você identifica.")
    console.log("Você tentar chegar perto pra verificar?")

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
    
        if (perg1 == 1){
            console.log("Você chega perto mas não consegue identificar nada.")
        } else if (perg1 == 2){
            console.log("Você é cagão é medroso e corre pro quarto com medo.");
        }

        //// NÃO IDENTIFICA ///////////
} else if (perg1 == 2){
    console.log("Você não identifica essa empresa.")
    console.log("Mas mesmo assim fica curioso.")
    console.log("Você tentar chegar perto pra verificar?")

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
    
        if (perg1 == 1){
            console.log("Você chega perto mas não consegue identificar nada.")
        } else if (perg1 == 2){
            console.log("Você é cagão é medroso e corre pro quarto com medo.");
        }
}

    console.log("Você volta pra o elevador e sobre pra o andar do seu quarto.");
    console.log("Ao chegar no quarto, toma uma banho e ...");
    console.log("Olha pra o freezer, hmm deu uma fome/sede ou é olho gordo ?");
    console.log("Você abre pra olhar ?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

if(perg1 == 1){
    console.log("Você abre e verifica que tem água e barra de chocolate.");
    console.log("Você ira comer/beber?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
    
        if (perg1 == 1){
            console.log("Você come e bebe, fica saciado e vai deitar.")
            console.log("Dorme igual uma pedra.");
            contagemDia += 1;
            sonoPers = 0

        } else if (perg1 == 2){
            console.log("Você prefere ir deitar, está muito cansado.");
            console.log("Dorme igual uma pedra.");
            contagemDia += 1;
            sonoPers = 0
        };

} else if(perg1 == 2){
    console.log("Você prefere ir deitar, está muito cansado.");
    console.log("Dorme igual uma pedra.");
    contagemDia += 1;
    sonoPers = 0
    forcaPers = 5
}

    console.log("Você acorda cedo e vai pro trabalho novo.")
    console.log("Chegando lá você é bem recepcionado, você é idolo pra muitos trabalhadores da NuclearTECH.")
    console.log();
    fomePers = 5
    sedePers = 5

    console.log("Passa um tempo de trabalho você tem a hora de almoço.")
    console.log("Você vai comer ?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

    if(perg1 == 1){
        console.log("Sim, vou comer agora!");
        fomePers = 0
        sedePers = 0

    }else if(perg1 == 2){
        console.log("Não, vou ficar com fome...");
        console.log("Cuidado, você está ficando fraco.")
        forcaPers = 1
    }

    console.log('Hoje o dia foi corrido.')
    console.log('Você volta pra o Hotel.')
    console.log("Você volta pra o elevador e sobre pra o andar do seu quarto.");
    console.log("Ao chegar no quarto, toma uma banho e come?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

if(perg1 == 1){
    console.log("Você abre e verifica que tem água e Marmita do Hotel.");
    console.log("Você ira comer/beber?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
    
        if (perg1 == 1){
            console.log("Você come e bebe, fica saciado e vai deitar.")
            console.log("Dorme igual uma pedra.");
            contagemDia += 1;
            sonoPers = 0

        } else if (perg1 == 2){
            console.log("Você prefere ir deitar, está muito cansado.");
            console.log("Dorme igual uma pedra.");
            contagemDia += 1;
            sonoPers = 0
        };

} else if(perg1 == 2){
    console.log("Você prefere ir deitar, está muito cansado.");
    console.log("Dorme igual uma pedra.");
    contagemDia += 1;
    sonoPers = 0
    forcaPers = 5
}

    console.log("Você acorda cedo e vai pro trabalho novo.")
    console.log("Chegando lá a empresa está dando uma palestra.")
    console.log();
    console.log("Você vai pra o auditório ?")

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

if(perg1 == 1){
    console.log("Sim, eu vou pra o auditório ver a palestra.");
    console.log("Ao chegar no auditório, senta ao lado de desconhecidos.");
    console.log("E ouve um buburinho entre 3 funcionarios.");
    console.log("Você vai tentar saber sem perceberem?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
    
        if (perg1 == 1){
            console.log("Sim, chego perto pra tentar ouvir algo.");
            console.log("Você ouve os funcionarios conversando com muito temor.");
            console.log("Ao ficar um tempo você consegue ouvir que eles estão dizendo.")
            console.log("Estão falando que os almãs estão projetando uma bomba nuclear pra atacar os EUA.")

        } else if (perg1 == 2){
            console.log("Não, fica na sua cadeira mesmo.");
            console.log("Você ouve os funcionarios conversando com muito temor.");
            console.log("Mesmo parado na sua cadeira, da pra ouvir eles conversando.")
            console.log("Estão falando que os almãs estão projetando uma bomba nuclear pra atacar os EUA.")
        };

}else if(perg1 == 2){
    console.log("Não, vou passear pela empresa.");
    console.log("Ao chegar perto de um escritório, você ouve barulho e se esconde sem que lhe vejam.")
    console.log("E ouve um buburinho entre 2 diretores.")
    console.log("Você vai tentar saber sem perceberem?")

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
    
        if (perg1 == 1){
            console.log("Sim, chego perto pra tentar ouvir algo.");
            console.log("Você ouve os diretores conversando com muito temor.");
            console.log("Ao ficar um tempo você consegue ouvir que eles estão dizendo.")
            console.log("Estão falando que os almãs estão projetando uma bomba nuclear pra atacar os EUA.")

        } else if (perg1 == 2){
            console.log("Não, fica no corredor mesmo.");
            console.log("Você ouve os diretores conversando com muito temor.");
            console.log("Mesmo pelo corredor da pra ouvir eles conversando.")
            console.log("Estão falando que os almãs estão projetando uma bomba nuclear pra atacar os EUA.")
        };
    }

    console.log("Ao receber essa informação você fica com muito medo, pois é alemão e saiu fugido pra os EUA.")
    console.log("Decide procurar o Spencer.")
    console.log("Porém o Spencer não está na empresa hoje.");
    console.log("A palestra acaba e todos estão liberados, fim de expediente.")
    console.log("Você vai pra o Hotel.")
    console.log("Ao chegar no quarto, toma uma banho e come?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

if(perg1 == 1){
    console.log("Você abre e verifica que tem água e Marmita do Hotel.");
    console.log("Você ira comer/beber?");

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);
    
        if (perg1 == 1){
            console.log("Você come e bebe, fica saciado e vai deitar.")
            console.log("Dorme igual uma pedra.");
            contagemDia += 1;
            sonoPers = 0

        } else if (perg1 == 2){
            console.log("Você prefere ir deitar, está muito cansado.");
            console.log("Dorme igual uma pedra.");
            contagemDia += 1;
            sonoPers = 0
        };

} else if(perg1 == 2){
    console.log("Você prefere ir deitar, está muito cansado.");
    console.log("Dorme igual uma pedra.");
    contagemDia += 1;
    sonoPers = 0
    forcaPers = 5
}

    console.log("Você acorda cedo e vai pro trabalho novo.")
    console.log("Chegando lá a empresa você pensa se deve contar pra o Spencer.")
    console.log("Você é um físico nuclear e que sabe como desenvolver a bomba ATOMICA/NUCLEAR.");
    console.log("Ira procurar o Spencer? ?")

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

    if(perg1 == 1){
        console.log("Corro pra o escritorio do Spencer, pra conversar sobre o que ouvi.");
        console.log("O Spencer é um dos Diretores da empresa, mesmo assim irei converar.")
        console.log("Você acha o Spencer, ira contar?")

        mostrarMenuCompleto();
        var perg1 = prompt("Escolha entre as opções: ");
        validacaoMenuCompleto(perg1);

        if(perg1 == 1){
            console.log("Spencer, eu acabei ouvindo por um acaso um boato que os alemães estão pra produzir uma bomba.");
            console.log("Spencer fala: Calma, onde você ouvi isso... rs");
            console.log("Você pode falar a verdade ou mentir.");
            console.log("Você ira mentir?");

            mostrarMenuCompleto();
            var perg1 = prompt("Escolha entre as opções: ");
            validacaoMenuCompleto(perg1);

            if(perg1 == 1){
                console.log("Eu soube atraves de funcionarios da empresa...");
                console.log("Spencer fica abismado e pede pra não contar pra mais ninguem.")
                console.log("Ao mesmo tempo fala que é pra você da seu material sobre bombas pra ele.")
                console.log("Que ele ira verificar pessalmente isso...")
        
            }else if(perg1 == 2){
                console.log("Um conhecido da alemanhã me contou...");
                console.log("Spencer fica abismado e pede pra não contar pra mais ninguem.")
                console.log("Ao mesmo tempo fala que é pra você da seu material sobre bombas pra ele.")
                console.log("Que ele ira verificar pessalmente isso...")
            }
        
    
        }else if(perg1 == 2){
            console.log("Não, você da um migué e fala que só foi comprimentar-lo nesse lindo dia.");
            console.log("Não irei falar com Spencer, vou verificar o que fazer.");
            console.log("Abro meu Notbook e verifico os documentos sobre a Bomba Nuclear/Atomica que fiz.");
            console.log("Estando tudo ok posso tomar providências...");
        }
    

    }else if(perg1 == 2){
        console.log("Não irei falar com Spencer, vou verificar o que fazer.");
        console.log("Abro meu Notbook e verifico os documentos sobre a Bomba Nuclear/Atomica que fiz.");
        console.log("Estando tudo ok posso tomar providências...");
    }

    console.log("Chegou final do expediente você segue pra o Hotel.");
    console.log("Sobe pra o seu quarto, toma banho e come/bebe algo.");
    fomePers = 0
    sedePers = 0
    sonoPers = 4
    console.log();
    console.log("Abre seu Notbook e junta todas as evidências e documentos que você tem sobre BOMBA.");
    console.log("Depois dorme igual uma pedra.");
    contagemDia += 1;
    sonoPers = 0
    forcaPers = 5

    console.log("Ao acordar, você pensa em levar o caso pra o Governo dos EUA e seder sue material.")
    console.log("Mas também pensa em dar todo material pra o Spencer.")
    console.log("Pensa bem e ...")
    console.log("Você ira ao Governo ?")

    mostrarMenuCompleto();
    var perg1 = prompt("Escolha entre as opções: ");
    validacaoMenuCompleto(perg1);

    //////  GOVERNO  //////
    if(perg1 == 1){
        console.log("Vou até o Governo dos EUA.");
        console.log("Conto sobre o tal boato que ouvi de fontes seguras.")
        console.log("Entrego todo material pra eles e sou encaminhado pra o FBI/CIA.")
        console.log("Chegando lá, pedem pra ficar em sigilo total e me oferecem 5 Milhões como pagamento pelo material.")
        console.log("Ao receber a grana e comecar a sair do prédio, chegou 4 homens e colocaram um pano na minha cara.")
        contagemDia += 12;
        console.log("Você tenta reagir?")

        mostrarMenuCompleto();
        var perg1 = prompt("Escolha entre as opções: ");
        validacaoMenuCompleto(perg1);

        if(perg1 == 1){
            console.log("Sim, tento da murro em todos.");
            console.log("Acerto 2, mas recebo um taser e acabo desmaiando.")
            console.log();
            console.log("Ao acordar, estou em uma base militar dos EUA, provavelmente a Área 51.");
            console.log("Diretores me explicam o motivo da minha presença forçada.");
            console.log("Irei desenvolver a bomba nuclear para Defesa do EUA.")
            console.log("Você ira ajudar a desevolver ?")

            mostrarMenuCompleto();
            var perg1 = prompt("Escolha entre as opções: ");
            validacaoMenuCompleto(perg1);

            if(perg1 == 1){
                console.log("Sim, irei ajudar o pais que me acolheu.");
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, seu projeto de vida está pronto e pra DEFESA !");
                contagemDia += 258
                console.log();                
                console.log("Te liberam e você volta pra o Hotel, que está a 22h de distancia.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênt.")
                console.log("Os EUA acabam de BOMBARDEAR a Alemanhã e matar MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões do seu proprio povo.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")

                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);

                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
                }
            

            
        
            }else if(perg1 == 2){
                console.log("Não, quero que se lasque...");
                console.log("Infelizmente você não tem escolha...")
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, por seu projeto de vida está pronto e pra DEFESA, mesmo chateado pelo trabalho forçado.");
                contagemDia += 258
                console.log("Te liberam e você volta pra o Hotel.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênt.")
                console.log("Os EUA acabam de BOMBARDEAR a Alemanhã e matar MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões do seu proprio povo.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")
                
                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);

                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
                }

            }
        
        }else if(perg1 == 2){
            console.log("Não, sou fresco e medroso.");
            console.log("Recebo um taser e acabo desmaiando.")
            console.log();
            console.log("Ao acordar, estou em uma base militar dos EUA, provavelmente a Área 51.");
            console.log("Diretores me explicam o motivo da minha presença forçada.");
            console.log("Irei desenvolver a bomba nuclear para Defesa do EUA.")
            console.log("Você ira ajudar a desevolver ?")

            mostrarMenuCompleto();
            var perg1 = prompt("Escolha entre as opções: ");
            validacaoMenuCompleto(perg1);

            if(perg1 == 1){
                console.log("Sim, irei ajudar o pais que me acolheu.");
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, seu projeto de vida está pronto e pra DEFESA !");
                contagemDia += 258
                console.log();                
                console.log("Te liberam e você volta pra o Hotel, que está a 22h de distancia.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênt.")
                console.log("Os EUA acabam de BOMBARDEAR a Alemanhã e matar MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões do seu proprio povo.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")

                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);

                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
                }   
        
            }else if(perg1 == 2){
                console.log("Não, quero que se lasque...");
                console.log("Infelizmente você não tem escolha...")
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, por seu projeto de vida está pronto e pra DEFESA, mesmo chateado pelo trabalho forçado.");
                contagemDia += 258
                console.log("Te liberam e você volta pra o Hotel.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênt.")
                console.log("Os EUA acabam de BOMBARDEAR a Alemanhã e matar MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões do seu proprio povo.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")
                
                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);

                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
                }

            }

        }


    

    } else if(perg1 == 1){
        console.log("Vou até o Spencer na sede de NuclearTECH.");
        console.log("Conto sobre o tal boato que ouvi de fontes seguras.")
        console.log("Entrego todo material pra eles e sou encaminhado pra uma sala secreta.")
        console.log("Chegando lá, pedem pra ficar em sigilo total e me oferecem 5 Milhões como pagamento pelo material.")
        console.log("Ao receber a grana e comecar a sair do prédio, chegou 4 homens e colocaram um pano na minha cara.")
        contagemDia +=12;
        console.log("Você tenta reagir?")
    
        mostrarMenuCompleto();
        var perg1 = prompt("Escolha entre as opções: ");
        validacaoMenuCompleto(perg1);
    
        if(perg1 == 1){
            console.log("Sim, tento da murro em todos.");
            console.log("Acerto 2, mas recebo um taser e acabo desmaiando.")
            console.log();
            console.log("Ao acordar, estou em uma base militar altamente secreda da NuclearTECH, os funcionarios estão com um sotaque diferente.");
            console.log("Diretores me explicam o motivo da minha presença forçada.");
            console.log("Irei desenvolver a bomba nuclear nivel militar pra a empresa.")
            console.log("Você ira ajudar a desevolver ?")
    
            mostrarMenuCompleto();
            var perg1 = prompt("Escolha entre as opções: ");
            validacaoMenuCompleto(perg1);
    
            if(perg1 == 1){
                console.log("Sim, irei ajudar a emprsa que trabalho.");
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, seu projeto de vida está pronto e pra DEFESA !");
                contagemDia += 258
                console.log();                
                console.log("Te liberam e você volta pra o Hotel, que está a 22h de distancia.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênte.")
                console.log("A NuclearTECH vendeu sua bomba pra a Alemanhã que BOMBARDEAR o EUAã e matou MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões de pessoas do pais que você atualmente reside.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")
    
                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);
    
                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
                }
        
            }else if(perg1 == 2){
                console.log("Não, quero que se lasque...");
                console.log("Infelizmente você não tem escolha...")
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, seu projeto de vida está pronto e pra DEFESA !");
                contagemDia += 258
                console.log();                
                console.log("Te liberam e você volta pra o Hotel, que está a 22h de distancia.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênte.")
                console.log("A NuclearTECH vendeu sua bomba pra a Alemanhã que BOMBARDEAR o EUAã e matou MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões de pessoas do pais que você atualmente reside.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")
                
                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);
    
                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
                }
    
            }
        
        }else if(perg1 == 2){
            console.log("Não, sou fresco e medroso.");
            console.log("Recebo um taser e acabo desmaiando.")
            console.log();
            console.log("Ao acordar, estou em uma base militar dos EUA, provavelmente a Área 51.");
            console.log("Diretores me explicam o motivo da minha presença forçada.");
            console.log("Irei desenvolver a bomba nuclear para Defesa do EUA.")
            console.log("Você ira ajudar a desevolver ?")
    
            mostrarMenuCompleto();
            var perg1 = prompt("Escolha entre as opções: ");
            validacaoMenuCompleto(perg1);
    
            if(perg1 == 1){
                console.log("Sim, irei ajudar o pais que me acolheu.");
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, seu projeto de vida está pronto e pra DEFESA !");
                contagemDia += 258
                console.log();                
                console.log("Te liberam e você volta pra o Hotel, que está a 22h de distancia.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênte.")
                console.log("A NuclearTECH vendeu sua bomba pra a Alemanhã que BOMBARDEAR o EUAã e matou MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões de pessoas do pais que você atualmente reside.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")
    
                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);
    
                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...")
                    console.log("Porém, você acorda de um sonho/premonição...")
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...")
                }   
        
            }else if(perg1 == 2){
                console.log("Não, quero que se lasque...");
                console.log("Infelizmente você não tem escolha...")
                console.log("Você passa alguns meses ajudando eles e até que a bomba está pronta.");
                console.log("Você está feliz, seu projeto de vida está pronto e pra DEFESA !");
                contagemDia += 258
                console.log();                
                console.log("Te liberam e você volta pra o Hotel, que está a 22h de distancia.");
                console.log("Você pega um avião, chega na cidade, e vai pra o hotel...");
                console.log("Ao acabar o banho ao ligar a TV você ouve um chamado urgênte.")
                console.log("A NuclearTECH vendeu sua bomba pra a Alemanhã que BOMBARDEAR o EUAã e matou MILHÕES...")
                console.log("Com a bomba que você desemvolveu junto a eles...")
                console.log("Você vê que sua criação matou milhões de pessoas do pais que você atualmente reside.")
                console.log("Unica coisa que vem a sua cabeça é se matar...")
                console.log("Você sobe ao terraço do hotel e :")
                console.log("Se jogaria?")
                
                mostrarMenuCompleto();
                var perg1 = prompt("Escolha entre as opções: ");
                validacaoMenuCompleto(perg1);
    
                if(perg1 == 1){
                    console.log("Sim, não carregarei essa culpa.");
                    console.log("Você se joga de cabeça !");
                    console.log("Porém, você acorda de um sonho/premonição...");
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...");
            
                }else if(perg1 == 2){
                    console.log("Não, vou resistir e buscar justiça.");
                    console.log("Tarde de mais, você escorregou da beirada e caiu...");
                    console.log("Porém, você acorda de um sonho/premonição...");
                    console.log("Dentro do avião indo pra os EUA fugido da Alemanhã...");
                }
            }
        }
    }
