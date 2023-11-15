document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
})

document.getElementById("btnEnviar").addEventListener('click', (e) => {
    e.preventDefault();
})

var filmes = [];

function carregarFilme() {
    var nomeFilme = document.getElementById("nome").value;
    var posterFilme = document.getElementById("poster").value;

    if (nomeFilme == "") {
        alert("Informe o nome do filme!");
    }
    else if (posterFilme == "") {
        alert("Informe o link para a capa do filme!");
    }
    else if (posterFilme.toUpperCase().substring(posterFilme.length - 4) != ".JPG") {
        alert("Somente imagens .jpg são permitidas!");
    }
    else {
        var filmeRepetido = false;

        for (var i = 0; i < filmes.length; i++) {
            if (filmes[i][0] == nomeFilme || filmes[i][1] == posterFilme) {
                filmeRepetido = true;
                break;
            }
        }

        if (filmeRepetido) {
            alert("Esse filme já está na lista!");
        }
        else {
            var auxFilme = [nomeFilme, posterFilme];
            filmes.push(auxFilme);

            var galeria = document.getElementById("galeria-content");
            galeria.innerHTML = "";
            var html = "";
            filmes.forEach(filme => {
                html += '<div class="item-galeria"><img src="' + filme[1] + '"/><p>' + filme[0] + '</p></div>';
            });

            galeria.innerHTML = html;

            document.getElementById("nome").value = "";
            document.getElementById("poster").value = "";

        }


    }


}