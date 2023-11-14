# 🚀 API Controle de Clientes e Grupos - Makima Bot para WhatsApp

## 📜 Descrição

Este repositório contém uma API REST que compõe o backend de um bot para WhatsApp que utiliza inteligência artificial para responder dúvidas de alunos em grupos de estudo ou profissionais que necessitam de consultas rápidas e fáceis.
<br>
<br>

## 🛠️ Stacks utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas na área de desenvolvimento de sistemas web:

- **Node.js e npm:** Ambiente de execução e gerenciador de pacotes para JavaScript.
- **NestJS:** Framework para construção de aplicativos server-side eficientes e escaláveis em Node.js.
- **Docker e Docker Compose:** Para facilitar a criação e gerenciamento de ambientes isolados.
- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional.
- **Prisma ORM:** Mapeamento de dados e interação com o banco de dados.
- **Swagger:** Ferramenta para documentação de APIs.
- **Git:** Controle de versionamento.
- **Padrão de Arquitetura:** Módulos, padrão do NestJS que se baseia no Angular.

<br>

## 📋 Pré-requisitos  

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).
- **Docker Desktop:** Necessário para o banco de dados PostgreSQL. Baixe em [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
- **Ferramentas de Teste de API:** <br>
Postman [https://www.postman.com/downloads/](https://www.postman.com/downloads/)<br>
Insomnia [https://insomnia.rest/download/](https://insomnia.rest/download/)<br>
Ou Thunder Client (extensão no Visual Studio Code).


<br>

## ⚙️ Configuração do Projeto

1. **Abra a pasta desejada e clone o repositório:**

    ```bash
    git clone https://github.com/EdisonMatos/NestJS-RestAPI-WhatsappBOT-Makima-with-Postgres-on-Docker.git
    ```

2. **Instale as dependências:**

    ```bash
    cd Backend-Makima-Wapp-BOT-Typescript-NodeJs-NestJS-Docker-Postgres-Swagger
    npm install
    ```

3. **Configuração do Ambiente**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```env
   DATABASE_URL=postgresql://postgres:12345@localhost:5432/postgres
   API_PORT=3000
   ```

   Use `.env.example` como referência. Obs: Essas variáveis de ambiente são dados sensíveis e não devem estar expostas publicamente, mas como neste caso o projeto irá rodar em localhost com um banco em uma iamgem no docker também no computador do usuário, fica mais prático informar o conteúdo do arquivo `.env` aqui para facilitar o teste da aplicação.

4. **Configuração da infraestrutura**

   Use Docker Compose para subir o banco de dados PostgreSQL:

   ```bash
   npm run infra:up
   ```

5. **Iniciando o Prisma ORM**

   Execute o Prisma generate para gerar o código sql:

   ```bash
   npm run gen
   ```

   Em seguida aplique as migrações com:

   ```bash
   npx prisma db push
   ```

6. **Executando o Projeto**

    ```bash
    npm start
    ```

7. Acesse [http://localhost:3000](http://localhost:3000).


<br>

## 📘 Documentação com Swagger

O Swagger UI é uma interface interativa que permite explorar e testar os endpoints da API de forma visual. Para acessar o Swagger UI e explorar os endpoints deste projeto, após ter iniciado a aplicação, acesse: [localhost:3000/swagger](localhost:3000/swagger).

<img src="https://static1.smartbear.co/swagger/media/images/tools/opensource/swagger_ui.png" alt="drawing" width="500"/></img>

<br>

## 🚀 Fazendo Requisições para a API

Para interagir com os endpoints da API, você pode usar ferramentas como Postman, Insomnia ou Thunder Client no Visual Studio Code. Acesse a documentação Swagger em [http://localhost:3000/swagger](http://localhost:3000/swagger) para obter detalhes sobre os endpoints e parâmetros necessários.


<br>

## 🛣️ Endpoints

### Entidade: Cliente

#### Criar Cliente

- **Método:** `POST`
- **Rota:** `localhost:3000/customers`
- **Corpo da Requisição (Exemplo):**
  ```json
  {
    "phone": "11999612232",
    "name": "João da Silva",
    "credit": 100.0,
    "email": "joao.silva@example.com"
  }
  ```
- **Resposta:** Cliente criado com sucesso.

#### Listar Todos os Clientes

- **Método:** `GET`
- **Rota:** `localhost:3000/customers`
- **Resposta:** Lista de todos os clientes cadastrados.

#### Atualizar Informações do Cliente

- **Método:** `PATCH`
- **Rota:** `localhost:3000/customers/{id}`
- **Corpo da Requisição (Exemplo):**
  ```json
  {
    "name": "João Silva",
    "credit": 150.0
  }
  ```
- **Resposta:** Informações do cliente atualizadas com sucesso.

#### Buscar Cliente por ID

- **Método:** `GET`
- **Rota:** `localhost:3000/customers/{id}`
- **Resposta:** Informações do cliente com o ID especificado.

#### Excluir Cliente por ID

- **Método:** `DELETE`
- **Rota:** `localhost:3000/customers/{id}`
- **Resposta:** Cliente excluído com sucesso.

### Entidade: Grupo

#### Criar Grupo

- **Método:** `POST`
- **Rota:** `localhost:3000/groups`
- **Corpo da Requisição (Exemplo):**
  ```json
  {
    "chatId": "550d8954-bb6a-4fb3-91dc-8f7fa6f858bb",
    "customerId": "ab8d25d3-3fe5-4cd4-a179-d0785d9bed00"
  }
  ```
- **Resposta:** Grupo criado com sucesso.

#### Listar Todos os Grupos

- **Método:** `GET`
- **Rota:** `localhost:3000/groups`
- **Resposta:** Lista de todos os grupos cadastrados.

#### Excluir Grupo por ID

- **Método:** `DELETE`
- **Rota:** `localhost:3000/groups/{id}`
- **Resposta:** Grupo excluído com sucesso.


<br>

## 🧑‍💻 Autores

Este projeto foi desenvolvido por Edison Matos.

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

Edison Matos é um entusiasta da tecnologia, desenvolvedor backend de software e apaixonado por criar soluções inovadoras.<br>
Saiba mais sobre no [GitHub](https://github.com/EdisonMatos) para descobrir mais projetos e colaborações.

<br>

## 🤝 Contribuição

Se deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b feature/nome-da-sua-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Adiciona nova feature'`.
4. Push para a branch: `git push origin feature/nome-da-sua-feature`.
5. Abra um pull request para revisão.


<br>

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
