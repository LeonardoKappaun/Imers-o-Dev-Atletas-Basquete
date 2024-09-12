function pesquisar() {
  let section = document.getElementById('resultados-pesquisa');

  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  if (!campoPesquisa) {
    section.innerHTML = '<p>Nada foi encontrado</p>';
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = '';
  let nome = '';
  let times = '';
  let titulosNBA = '';

  //para cada dado dentro da lista de dados
  for (let dado of dados) {
    nome = String(dado.nome).toLowerCase();
    times = String(dado.times).toLowerCase();
    titulosNBA = String(dado.titulosNBA).toLowerCase();

    if (
      nome.includes(campoPesquisa) ||
      times.includes(campoPesquisa) ||
      titulosNBA.includes(campoPesquisa)
    ) {
      resultados += `<div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.nome}</a></h2>
      <p class="descricao-meta">
        <ul>
          <li>Títulos NBA: ${dado.titulosNBA}</li>
          <li>Pontos: ${dado.pontos}</li>
          <li>Times: ${dado.times}</li>
        </ul>
        </p>
      <a href=${dado.wiki} target="_blank"
        >Mais informações</a
      >
    </div>`;
    } else {
      section.innerHTML = '<p>Nada foi encontrado</p>';
    }
  }

  if (!resultados) {
    resultados = '<p>Nada foi encontrado</p>';
  }

  section.innerHTML = resultados;
}
