# Gestão de Bilhetes

Este projeto é uma aplicação React para a gestão de bilhetes, com funcionalidades de criação, listagem e exclusão. Ele utiliza uma API REST para persistir os dados.

## Funcionalidades

- **Listagem de bilhetes**: Exibe todos os bilhetes cadastrados.
- **Criação de bilhetes**: Permite adicionar novos bilhetes com validação de dados.
- **Exclusão de bilhetes**: Remove bilhetes diretamente da tabela.
- **Validação de dados**: Garantia de entradas válidas no formulário.
- **Interface Responsiva**: Design simples e funcional.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Fetch API**: Comunicação com o backend.
- **CSS**: Estilização da aplicação.
- **API REST**: Endpoint para manipulação dos bilhetes.

## Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── FormBilhetes.js    # Formulário para criar bilhetes
│   ├── ListaBilhetes.js   # Tabela para exibir bilhetes
├── services/
│   ├── api.js              # Comunicação com a API
├── styles/
│   ├── App.css             # Estilo principal
│   ├── FormBilhetes.css    # Estilo do formulário
│   ├── ListaBilhetes.css   # Estilo da lista
├── App.js                 # Componente principal
├── index.js                # Ponto de entrada do React
