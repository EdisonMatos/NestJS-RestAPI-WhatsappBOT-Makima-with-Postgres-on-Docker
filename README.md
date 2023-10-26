<h1>API REST - Backend pro Makima Whatsapp BOT com Typescript, NodeJs, NestJS, Docker, Postgres e Swagger</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Linguagem&message=JS / Typescript&color=blue&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Runtime&message=NodeJS&color=green&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Framework&message=NestJS&color=red&style=for-the-badge"/>
<br>
<br> 
  <img src="https://img.shields.io/static/v1?label=Banco de Dados&message=PostgreSQL&color=blue&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Container&message=Docker&color=blue&style=for-the-badge"/>
<br>
<br>
  <img src="https://img.shields.io/static/v1?label=Documentacao&message=Swagger&color=green&style=for-the-badge"/>
  <!--<img src="https://img.shields.io/static/v1?label=Vercel&message=deploy&color=blue&style=for-the-badge&logo=vercel"/>--> 
</p>
<br>

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=red&style=for-the-badge"/>
</p>

## Tópicos 🔎

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades da aplicação](#funcionalidades-da-aplicação)

<!--:small_blue_diamond: [Deploy da Aplicação](#link-da-aplicação-dash)-->

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

<br>

## Descrição do projeto 📑

<p align="justify">
  Esta API é uma aplicação que faz parte do backoffice do Makima Whatsapp Bot, um sistema de bot que usa inteligência artificial para auxiliar grupos de estudo em grupos no whatsapp.
</p>

<br>

## Funcionalidades da aplicação 🗃

:heavy_check_mark: Lista, insere, atualiza e remove conjunto de dados num banco de dados relacional Postgres rodando em um container no Docker

:heavy_check_mark: Cria containers dentro do Docker com o Docker Compose

:heavy_check_mark: Documenta toda a API de forma otimizada com o Swagger, permitindo facilmente ser consumida por outros usuários

:heavy_check_mark: Utiliza o PrismaORM para controle de migrations, comunicação e visualização do banco de dados

:heavy_check_mark: Armazena informações sensíveis em variáveis de ambiente

:heavy_check_mark: Valida entrada de dados como email, telefone e datas nas requisições 

:heavy_check_mark: Retorna mensagens de erro personalizadas

<br>

<!--## Link da aplicação :dash:

> Em breve: Na Vercel (https://vercel.com/) -->

## Pré-requisitos 🔧

Você precisa ter os itens abaixo instalados na sua máquina para rodar a aplicação:

:white_check_mark: [Node](https://nodejs.org/en/download/) 

:white_check_mark: [GIT](https://git-scm.com/downloads)

:white_check_mark: [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Algum client http para fazer requisições para APIs. Recomendo qualquer uma das opções abaixo:

:white_check_mark: [Postman](https://www.postman.com/downloads/) ou :white_check_mark: [Insomnia](https://insomnia.rest/download) ou :white_check_mark: [Thuder Client - Extensão do VS Code](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

<br>

## Como rodar a aplicação :arrow_forward:

Dentro da pasta onde deseja baixar a aplicação, abra o terminal e clone o projeto através do comando:

```
git clone https://github.com/EdisonMatos/ExpressJS-Full-Application.git
```
Acesse o conteúdo da pasta baixada através do comando:
```
cd API-REST-Backend-pro-Makima-Wapp-BOT-Typescript-NodeJs-NestJS-Docker-Postgres-Swagger
```
Dentro da pasta, instale o yarn que será o nosso gerenciador de bibliotecas
```
npm install yarn
```
ou
```
brew install yarn (mac)
```

A seguir, instale as dependências necessárias para rodar a aplicação através do comando:

```
yarn install
```
Abra o Docker Desktop na sua máquina e após se certificar que ele já inicializou, execute o comando:

```
yarn infra:up
```

Agora com o container criado, insira o banco de dados no volume já criado através do comando:

```
npx prisma db push
```

Agora, para iniciar a aplicação:
```
yarn start:dev
```

Caso precise encerrar a aplicação:
```
cmd + c (no mac)
```
ou
```
ctrl + c (no windows)
```

<br>

## Como manusear as funcionalidades da aplicação 

Após a aplicação estar rodando, abra o client de requisição http de sua preferência.

Para fazer as requisições, siga o passo a passo a seguir:

<br> 
<a href="https://ibb.co/ZmKNRFj"><img src="https://i.ibb.co/NSp7gJv/Captura-de-Tela-2023-10-25-s-15-10-18.png" alt="Captura-de-Tela-2023-10-25-s-15-10-18" border="0"></a>
<br>

1. Selecionar o tipo de requisição (no nosso caso, GET, POST, PUT ou DELETE)

2. Preencher com a url do endpoint desejado (ex: localhost:3000/users

3. Se for requisição que envia conteúdo no seu body, selecionar a opção BODY/JSON e preencher o espaço com o padrao JSON. Ex: {"name": "Edison"}

4. Após essas etapas terem sido concluídas, clicar em SEND para enviar a requisição e esperar a resposta da API no quadrante inferior.

<br>

## Utilizando a aplicação

Nesta aplicação temos um CRUD completo (CRUD = acrônimo para Create, Read, Update e Delete), desta forma conseguimos manipular os dados que iremos armazenar das seguinte formes: criando, visualizando, editando e deletando eles.

<br>

## CREATE - Uso do método POST

Para criar um conjunto de dados simples (neste caso, usuário apenas com nome), selecione o método POST, no endpoint localhost:3000/users e preencha o corpo da requisição com o seguinte código em json, e clique em enviar requisição:

```
{
"name": "Edison"
}
```
Obs: Nesta aplicação, a única propriedade obrigatória é o "name". Você pode inserir o que mais quiser desde que siga o padrão "chave": "valor".

<br>

## READ - Uso do método GET

Para termos acesso aos dados já armazenados, usaremos duas formas:

Read All - Lista todos os nomes armazenados: Selecione o método GET no endpoint localhost:3000/users e clique em enviar.

Read by id - Lista um nome em específico: Selecione o método GET no endpoint localhost:3000/users/1 e clique em enviar. Neste exemplo, voce acessará o primeiro nome que você armazenou. O número "1" adicionado ao final do endpoint localiza exatamente o 1º item na lista de nomes armazenados. Caso adicione mais de um, pode mudar o endpoint para 2, 3, etc, para visualizar os outros. 

<br>

### UPDATE - Uso do método PUT

Para atualizar as informações (neste caso, sobrescrever), selecione o método PUT, no endpoint com o número do nome desejado (ex: Se quiser alterar o 1º nome da lista, utilize localhost:3000/1 e preencha o corpo da requisição com o seguinte código em json com o novo nome:

```
{
"name": "Eduardo"
}
```

<br>

## DELETE - Uso do método DELETE

Para deletar um nome preenchido anteriormente, selecione o método DELETE, no endpoint com o número do nome desejado (ex: Se quiser deletar o 1º nome da lista, utilize localhost:3000/1 e clique em enviar.

<br>

## Considerações finais ✅

Este é um CRUD bem simples e com algumas validações (como necessidade do "name" ou impedindo que requests sejam feitas de forma incorreta, como enviar um dado alfabético no endpoint que deve receber apenas números, com foco em utilizar o ExpressJS para criar o servidor e manusearmos através de requisições do protocolo http, armazenando as informações na memória da própria aplicação. 

Abraço.

<br>

## Linguagens, dependencias e libs utilizadas :books:

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<!--

## Casos de Uso

Explique com mais detalhes como a sua aplicação poderia ser utilizada. O uso de **gifs** aqui seria bem interessante.

Exemplo: Caso a sua aplicação tenha alguma funcionalidade de login apresente neste tópico os dados necessários para acessá-la.

## JSON :floppy_disk:

### Usuários:

| name      | email                  | password | token | avatar                                                                                                              |
| --------- | ---------------------- | -------- | ----- | ------------------------------------------------------------------------------------------------------------------- |
| Lais Lima | laislima98@hotmail.com | lais123  | true  | https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9-U_HbQAipum9lWln3APcBIwng7T46hdBA42EJv8Hf6Z4fDT3&usqp=CAU |

...

Se quiser, coloque uma amostra do banco de dados

## Iniciando/Configurando banco de dados

Se for necessário configurar algo antes de iniciar o banco de dados insira os comandos a serem executados

...

Liste as tecnologias utilizadas no projeto que **não** forem reconhecidas pelo Github

## Resolvendo Problemas :exclamation:

Em [issues]() foram abertos alguns problemas gerados durante o desenvolvimento desse projeto e como foram resolvidos.

## Tarefas em aberto

Se for o caso, liste tarefas/funcionalidades que ainda precisam ser implementadas na sua aplicação

:memo: Tarefa 1

:memo: Tarefa 2

:memo: Tarefa 3

## Desenvolvedores/Contribuintes :octocat:

Liste o time responsável pelo desenvolvimento do projeto

| [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) | [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) | [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

-->

## Licença

The [MIT License]() (MIT)

Copyright :copyright: Ano 2023 - API REST - Lista de Usuários - JS, NodeJS e ExpressJS


<!--

## Dependencies & Services
- Prisma https://www.prisma.io
- NestJs - https://nestjs.com

## Get started Notes:
- Configure `.env` file while working on local environment  
- Health endpoint: `host:port/health`
- Swagger docs endpoint: `host:port/docs`


## Installation

```bash
$ yarn install
```
## Run in local

start core services first (rabbitmq)
```bash
$ yarn infra:up
```

Now, first place `.env` file in service folder
```bash
$ yarn start:dev
```

to stop core services, run
```bash
$ yarn infra:down
```

## Run in local with docker-compose

start core services
```bash
$ yarn infra:up
```

docker-compose command - this will take env variables from .env.local 
```bash
docker-compose up "service name" 
```

rebuild
```bash
docker-compose up "service name" --build
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# Creating new endpoints
 
NestJS will be responsible for managing routes and some HTTP workloads inside the box. In order to create a new endpoint/route we need to follow some steps.


## Controllers

1. First we need to create entity controller or use an existent one. Let's take an Customer controller as example:

    ```
   @Controller('customers')
   export class CustomerController {
     constructor() {}

    }
    ```

1. All we have to do in order to create an new endpoint inside "customers" route is create and new method and decorate it with Method Decorators that we want it to work like, using native modules from @nestjs/common, as we can see below with @Post() decorator

    ```
   @Controller('customers')
   export class CustomerController {
     constructor() {}

    //this is a nest decorator to indicate that we want to create a POST route
    @Post()
    create(@Body() createCustomerDto: CreateCustomerDto) {

    }
    }
    ```

1. Thinking of layers, we need to separate our endpoint in controllers, services and repositories. We already have created or used our customer controller to create a new endpoint, so lets create our customer service or use and existent one. 

    ```
    // this injectable decorator is a must need to use that class in other classes
   @Injectable()
   export class CustomerService {
     constructor() {}
     create(data: CreateCustomerDto) {
        return "This is create method"
    }
    }
    ```
1. And now, lets import this new created method in our controller. First lets export it in customer module: 

    ```
    @Module({
      controllers: [CustomerController],

      //WE export here in providers
      providers: [CustomerService]
    })
    export class CustomerModule {}
    ```

1. Now, lets import in customer controller and return in new method:

    ```
    @Controller('customers')
    export class CustomerController {
    //Import here
     constructor(private readonly customerService: CustomerService) {}

    //this is a nest decorator to indicate that we want to create a POST route
    @Post()
    create(@Body() createCustomerDto: CreateCustomerDto) {

        //return here
        return this.customerService.create(createCustomerDto);
    }
    }
    ```
1. And just doing this, you're ready to go!
