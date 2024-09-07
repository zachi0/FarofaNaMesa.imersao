function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
 
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "Resultado não encontrado."
        return 
    }

campoPesquisa = campoPesquisa.toLowerCase()

console.log (campoPesquisa)

let resultados = ""
let titulo="";
let descricao="";

for (let dado of dados) {
    titulo= dado.titulo.toLowerCase()
    descricao= dado.descricao.toLowerCase()
    if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
                        <h2> ${dado.titulo}</h2>
                        <p class="descricao-meta">${dado.descricao} </p>
                        <a class="link-ref" href="${dado.link}" target="_blank">Clique e veja a receita.</a>
                    </div>
        ` 
    }

    if (!resultados) {
 resultados= "Resultado não encontrado."
    }
    
    section.innerHTML = resultados
    }
    }
    

// console.log(dados);

