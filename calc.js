
//Seleciona o form pelo id e desabilita a submissão padrão. O id do form no html é form.
document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
})

//Seleciona o botão de enviar pelo id e desabilita o funcionamento padrão de submissão. O id do botão no html é btnEnviar.
document.getElementById("btnEnviar").addEventListener('click', (e) => {
    e.preventDefault();
})

//array que terá os filmes
var filmes = [];

//Evento onclick do botão
function carregarFilme() {
    var nomeFilme = document.getElementById("nome").value; //Nome do filme digitado no formulário
    var posterFilme = document.getElementById("poster").value; //Link do poster digitado no formulário

    if (nomeFilme == "") {//Nome do filme está preenchido?
        alert("Informe o nome do filme!");
    }
    else if (posterFilme == "") {//Url do poster está preenchida?
        alert("Informe o link para a capa do filme!");
    }
    else if (posterFilme.toUpperCase().substring(posterFilme.length - 4) != ".JPG") {// url do poster termina com .jpg?
        alert("Somente imagens .jpg são permitidas!");
    }
    else {

        //Verifica se o filme já está na lista
        var filmeRepetido = false;

        for (var i = 0; i < filmes.length; i++) {
            if (filmes[i][0] == nomeFilme || filmes[i][1] == posterFilme) {
                filmeRepetido = true;
                break;
            }
        }


        if (filmeRepetido) {//Filme repetido?
            alert("Esse filme já está na lista!");
        }
        else {
            //se filme não repetido, adiciona nome e url do poster em um array.
            var auxFilme = [nomeFilme, posterFilme];
            // adiciona este array no array de filmes. Ou seja, cada elemento do array filmes é um array com 2 elementos, nome e url.
            filmes.push(auxFilme);

            //Pega o componente onde serão colocados os filmes pelo id
            var galeria = document.getElementById("galeria-content");
            //Limpa o html do componente onde ficarão os filmes.
            galeria.innerHTML = "";

            //Coloca o html com todos os filmes em uma variável
            //Obs: No loop, cada elemento do array filmes é atribuído à variável filme, que também é um array. filme[0] é o nome e filme [1] é a url.
            var html = "";
            filmes.forEach(filme => {
                html += '<div class="item-galeria"><img src="' + filme[1] + '"/><p>' + filme[0] + '</p></div>';
            });

            //Coloca o html dentro do componente
            galeria.innerHTML = html;

            //Limpa os campos de nome e link do poster do formulário
            document.getElementById("nome").value = "";
            document.getElementById("poster").value = "";

        }


    }


}