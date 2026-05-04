function calcular() {
    let panico = document.getElementById("panico");
    let gentegrande2 = document.getElementById("gentegrande2");
    let click = document.getElementById("click");
    let comedia3 = document.getElementById("comedia3"); // Todo Poderoso
    let comedia5 = document.getElementById("comedia5"); // Minha mãe é uma peça
    let comedia6 = document.getElementById("comedia6"); // Arremessando Alto
    let esposa = document.getElementById("esposa");
    let mascara = document.getElementById("mascara");

    let velozesefuriosos = document.getElementById("velozesefuriosos");
    let implacaveis = document.getElementById("implacaveis");
    let diablocaca = document.getElementById("diablocaca");
    let triple9 = document.getElementById("triple9");
    let adaonegro = document.getElementById("adaonegro");
    let badboys = document.getElementById("badboys");
    let coringa = document.getElementById("coringa");
    let missaoresgate = document.getElementById("missaoresgate");

    let moana2 = document.getElementById("moana2");
    let toystore = document.getElementById("toystore");
    let sa = document.getElementById("sa");
    let sing2 = document.getElementById("sing2");
    let turma = document.getElementById("turma");
    let infantil2 = document.getElementById("infantil2");
    let infantil3 = document.getElementById("infantil3");
    let infantil4 = document.getElementById("infantil4");

    let total = 0;
    let itens = "";

    if (panico.checked) { total += 15; itens += "Todo mundo em Pânico <br>"; }
    if (gentegrande2.checked) { total += 25; itens += "Gente Grande 2 <br>"; }
    if (click.checked) { total += 20; itens += "Click <br>"; }
    if (comedia3.checked) { total += 35; itens += "Todo Poderoso <br>"; }
    if (comedia5.checked) { total += 22; itens += "Minha Mãe é uma Peça <br>"; }
    if (comedia6.checked) { total += 28; itens += "Arremessando Alto <br>"; }
    if (esposa.checked) { total += 22; itens += "Esposa de Mentirinha <br>"; }
    if (mascara.checked) { total += 18; itens += "O Máskara <br>"; }

    if (velozesefuriosos.checked) { total += 69.90; itens += "Velozes e Furiosos 10 <br>"; }
    if (implacaveis.checked) { total += 45; itens += "Implacáveis <br>"; }
    if (diablocaca.checked) { total += 20; itens += "Diablo <br>"; }
    if (triple9.checked) { total += 30; itens += "Triple 9 <br>"; }
    if (adaonegro.checked) { total += 40; itens += "Adão Negro <br>"; }
    if (badboys.checked) { total += 40; itens += "Bad Boys <br>"; }
    if (coringa.checked) { total += 50; itens += "Coringa <br>"; }
    if (missaoresgate.checked) { total += 30; itens += "Missão Resgate <br>"; }

    if (moana2.checked) { total += 70; itens += "Moana 2 <br>"; }
    if (toystore.checked) { total += 70; itens += "Toy Story 5 <br>"; }
    if (sa.checked) { total += 40; itens += "Monstros S.A <br>"; }
    if (sing2.checked) { total += 25; itens += "Sing 2 <br>"; }
    if (turma.checked) { total += 25; itens += "A turma da Mônica <br>"; }
    if (infantil2.checked) { total += 30; itens += "Os Croods 2 <br>"; }
    if (infantil3.checked) { total += 35; itens += "Minions 2 <br>"; }
    if (infantil4.checked) { total += 40; itens += "Divertida Mente <br>"; }

    let resultado = document.getElementById("resultado");

    if (total === 0) {
        resultado.innerHTML = "Escolha pelo menos um filme para alugar!";
        return;
    }

    let desconto = total >= 60 ? total * 0.10 : 0;
    let totalFinal = total - desconto;

    resultado.innerHTML = `
        <strong>Filmes Selecionados:</strong><br>${itens}
        <hr>
        Subtotal: R$ ${total.toFixed(2)}<br>
        Desconto (10%): R$ ${desconto.toFixed(2)}<br>
        <strong>Total a Pagar: R$ ${totalFinal.toFixed(2)}</strong>
    `;
}