
    const criarCampoPergunta = (indice) => {
      return `
        <form action="#" method="post"> 
          <label for="nome_completo_${indice}">${indice}-</label>
          <input class="edita_perguntad_adm" type="text" name="nome_completo_${indice}" id="nome_completo_${indice}" required> 
          <button type="button" class="img_edite_pergunta">
            <img src="edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="Editar">
          </button>
          <button type="button">
            <img src="delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="Excluir">
          </button>
        </form>
      `;
    };

    let contador = 1;

    function adicionarPergunta() {
      const container = document.getElementById("container-perguntas");
      container.insertAdjacentHTML("beforeend", criarCampoPergunta(contador));
      contador++;
    }
