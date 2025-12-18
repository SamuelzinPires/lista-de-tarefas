//tenta pegar do 'banco'. Se não tiver nada, cria um array vazio [].
let minhasTarefas = JSON.parse(localStorage.getItem('listaTarefas')) || [];

// Capturando os elementos
const inputTarefa = document.getElementById('nova-tarefa');//
const inputData = document.getElementById('data-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaCompleta = document.getElementById('lista-tarefas');

// // Função para ADICIONAR, abrir o site, as tarefas salvas apareçam na hora
mostrarTarefas();

function adicionarNovaTarefa() {
    const tarefaTexto = inputTarefa.value;
    const tarefaData = inputData.value;
    // Validação: não deixa adicionar vazio
    if (tarefaTexto === "") {
        alert("Digite alguma coisa antes de adicionar!");
        return;
    } 

    const ficha = {
        tarefa: tarefaTexto,
        data: tarefaData,
        concluida: false
    };
    // Adiciona no Array
    minhasTarefas.push(ficha);
    // Limpa o input
    inputTarefa.value = "";
    inputData.value = "";
    // MANDA MOSTRAR NA TELA e salva sempre que muda algo
    mostrarTarefas();
    salvarNoBanco(); 
}
    // Função para MOSTRAR NA TELA (A "Impressora") 
function mostrarTarefas() {
    // A. Limpa a lista antiga (para não duplicar)
    listaCompleta.innerHTML = '';
    
    // B. Percorre cada item do Array e cria o HTML
    // "item" é o nome que demos para cada tarefa dentro do loop
    minhasTarefas.forEach((item, index) => {
        let dataFormatada = item.data;
        
        if (item.data) {
            let dataOriginal = new Date(item.data);
            dataOriginal.setDate(dataOriginal.getDate() + 1);
            dataFormatada = dataOriginal.toLocaleDateString('pt-BR');
        } else {
            dataFormatada = "S/Data";
        }

        const classeParaUsar = item.concluida ? 'task concluida' : 'task';

        listaCompleta.innerHTML = listaCompleta.innerHTML + `
            <li class="${classeParaUsar}">
                <div class="task-date">
                    ${dataFormatada} 
                </div>

                <div class="task-info" onclick="concluirTarefa(${index})">
                    <p class="nome-tarefa">${item.tarefa}</p>
                </div>
                
                <button class="delete-btn" onclick="deletarTarefa(${index})">
                    🗑️
                </button>
            </li>
        `;
    });
}
//Função Concluir
function concluirTarefa(posicao) {
    // Inverte o valor: Se era true vira false, se era false vira true
    minhasTarefas[posicao].concluida = !minhasTarefas[posicao].concluida;
    mostrarTarefas();
    // salva a mudança de status
    salvarNoBanco(); 
}
// FUNÇÃO: DELETAR
function deletarTarefa(posicao) {
    // Remove 1 item a partir da posição clicada
    minhasTarefas.splice(posicao, 1);
    // Manda desenhar a lista de novo (sem o item removido)
    mostrarTarefas();
    // Salva a remoção
    salvarNoBanco(); 
}

// Função auxiliar que grava o Array no navegador
function salvarNoBanco() {
    // localStorage só aceita TEXTO. O JSON.stringify transforma o Array em texto.
    localStorage.setItem('listaTarefas', JSON.stringify(minhasTarefas));
}
// Ouvinte do botão de adicionar
btnAdicionar.addEventListener('click', adicionarNovaTarefa);