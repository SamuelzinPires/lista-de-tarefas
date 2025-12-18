#  Minhas Tarefas - To-Do List

> Projeto de gerenciamento de tarefas desenvolvido para praticar lógica de programação e manipulação do DOM.

##  Sobre o Projeto

Este projeto é uma aplicação web de **Lista de Tarefas (To-Do List)** com tema Dark Mode. O objetivo principal foi aplicar conhecimentos de JavaScript Moderno (ES6+), manipulação de Arrays/Objetos e persistência de dados no navegador.

A aplicação permite criar tarefas com prazos definidos, marcar como concluídas visualmente e excluir itens, mantendo tudo salvo mesmo após atualizar a página.

##  Funcionalidades

- [x] **Adicionar Tarefas:** Campo de texto com validação para não adicionar itens vazios.
- [x] **Definição de Prazos:** Input de data que formata automaticamente para o padrão brasileiro (dd/mm/aaaa).
- [x] **Persistência de Dados:** Uso do `localStorage` para salvar as tarefas no navegador do usuário (os dados não somem ao dar F5).
- [x] **Status de Conclusão:** Ao clicar na tarefa, ela é marcada como "feita" (texto riscado e opacidade reduzida).
- [x] **Remoção:** Botão de lixeira para excluir tarefas individualmente.
- [x] **Interface Responsiva:** Layout adaptável para telas grandes e dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **HTML5:** Estrutura semântica.
* **CSS3:**
    * Flexbox para layout.
    * Animações (`@keyframes`) para entrada suave das tarefas.
    * Variáveis e estilização Dark Mode.
* **JavaScript (Vanilla):**
    * Manipulação do DOM.
    * `localStorage` e `JSON.parse/stringify`.
    * Métodos de Array (`push`, `splice`, `forEach`, `filter`).
    * Manipulação de Objeto `Date` para formatação.

##  Preview

![Visualização do Projeto](./assets/preview.png)

##  Como executar o projeto

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SamuelzinPires/lista-de-tarefas.git](https://github.com/SamuelzinPires/lista-de-tarefas.git)
    ```
2.  Abra o arquivo `index.html` no seu navegador de preferência.

---

Desenvolvido por **Samuel Pires** 