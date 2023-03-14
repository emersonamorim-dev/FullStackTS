# Backend TS

Codificação usando DonetCore 6.0 programado em C# com uso de Framework Microsoft Entity Framework para facilitar implementaçao do código.

# Para rodar a aplicação é necessário instalar os seguintes pacotes:
Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.Migrations, Microsoft SQL isso pode ser feito através do Gerenciador de Pacotes do Visual Studio o NuGet

Depois de instalado é necessário seguintes comandos no Backend. Abra o terminal Package Manager Console e rode os comandos:

- dotnet build
- dotnet restore
- dotnet ef database update --project BackendTS
- 
Esse útimo comando vai subir as tabelas para o Banco de dados Microsoft SQL e lógico é necessário verificar se não existe nenhum erro na migrations ou no mesmo no código.

# Segue uma breve descrição de como funciona os Controller dentro do Backend:

Controller de Pessoa
Este é um controlador ASP.NET Core MVC que manipula a entidade "Pessoa" em um aplicativo de Backend. O controlador define endpoints HTTP para criar, ler, atualizar e excluir pessoas no banco de dados.

O PessoaController.ts é O controlador define as seguintes rotas:

- GET api/Pessoa: retorna uma lista de todas as pessoas no banco de dados.
- GET api/Pessoa/{id}: retorna uma pessoa específica com base no ID fornecido.
- POST api/Pessoa: cria uma nova pessoa com base nos dados fornecidos no corpo da solicitação.
- PUT api/Pessoa/{id}: atualiza uma pessoa existente com base no ID fornecido e nos dados fornecidos no corpo da solicitação.
- DELETE api/Pessoa/{id}: exclui uma pessoa existente com base no ID fornecido.

# Dependências
O controlador depende de um objeto FullStackDbWContext para se comunicar com o banco de dados. O objeto FullStackDbContext é injetado por meio do construtor do controlador.

# Utilização
O controlador pode ser usado como parte de um aplicativo ASP.NET Core. Para usar o controlador, basta configurar as rotas apropriadas no arquivo Startup.cs do aplicativo e injetar as dependências necessárias no construtor do controlador.

# Descrição do Controller Automovel
O AutomovelController é um controlador ASP.NET Core que trata requisições HTTP para gerenciar informações sobre automóveis. Ele é responsável por acessar e manipular informações armazenadas no banco de dados FullStackDbContext, que é injetado por meio de sua construtora.

O controlador possui as seguintes rotas e métodos HTTP:

- GET api/Automovel: Retorna todos os automóveis armazenados no banco de dados.

- POST api/Automovel: Adiciona um novo automóvel no banco de dados com as informações passadas no corpo da requisição.

- GET api/Automovel/{id}: Retorna o automóvel com o id especificado na rota. Se não existir um automóvel com esse id, retorna um código de resposta HTTP 404 (not found).

- PUT api/Automovel/{id}: Atualiza as informações do automóvel com o id especificado na rota com as informações passadas no corpo da requisição. Se não existir um automóvel com esse id, retorna um código de resposta HTTP 404 (not found).

- DELETE api/Automovel/{id}: Remove o automóvel com o id especificado na rota do banco de dados. Se não existir um automóvel com esse id, retorna um código de resposta HTTP 404 (not found).

O controlador utiliza a classe Automovel como modelo para representar os dados dos automóveis, e todas as operações de acesso ao banco de dados são feitas de forma assíncrona.
