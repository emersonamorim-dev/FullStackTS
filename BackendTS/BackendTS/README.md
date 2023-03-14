# Backend TS

Codifica��o usando DonetCore 6.0 programado em C# com uso de Framework Microsoft Entity Framework para facilitar implementa�ao do c�digo.

# Para rodar a aplica��o � necess�rio instalar os seguintes pacotes:
Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.Migrations, Microsoft SQL isso pode ser feito atrav�s do Gerenciador de Pacotes do Visual Studio o NuGet

Depois de instalado � necess�rio seguintes comandos no Backend. Abra o terminal Package Manager Console e rode os comandos:

dotnet build
dotnet restore
dotnet ef database update --project BackendTS
Esse �timo comando vai subir as tabelas para o Banco de dados Microsoft SQL e l�gico � necess�rio verificar se n�o existe nenhum erro na migrations ou no mesmo no c�digo.

# Segue uma breve descri��o de como funciona os Controller dentro do Backend:

Controller de Pessoa
Este � um controlador ASP.NET Core MVC que manipula a entidade "Pessoa" em um aplicativo de Backend. O controlador define endpoints HTTP para criar, ler, atualizar e excluir pessoas no banco de dados.

O PessoaController.ts � O controlador define as seguintes rotas:

# GET api/Pessoa: retorna uma lista de todas as pessoas no banco de dados.
# GET api/Pessoa/{id}: retorna uma pessoa espec�fica com base no ID fornecido.
# POST api/Pessoa: cria uma nova pessoa com base nos dados fornecidos no corpo da solicita��o.
# PUT api/Pessoa/{id}: atualiza uma pessoa existente com base no ID fornecido e nos dados fornecidos no corpo da solicita��o.
# DELETE api/Pessoa/{id}: exclui uma pessoa existente com base no ID fornecido.

# Depend�ncias
O controlador depende de um objeto FullStackDbWContext para se comunicar com o banco de dados. O objeto FullStackDbContext � injetado por meio do construtor do controlador.

# Utiliza��o
O controlador pode ser usado como parte de um aplicativo ASP.NET Core. Para usar o controlador, basta configurar as rotas apropriadas no arquivo Startup.cs do aplicativo e injetar as depend�ncias necess�rias no construtor do controlador.

# Descri��o do Controller Automovel
O AutomovelController � um controlador ASP.NET Core que trata requisi��es HTTP para gerenciar informa��es sobre autom�veis. Ele � respons�vel por acessar e manipular informa��es armazenadas no banco de dados FullStackDbContext, que � injetado por meio de sua construtora.

O controlador possui as seguintes rotas e m�todos HTTP:

# GET api/Automovel: Retorna todos os autom�veis armazenados no banco de dados.

# POST api/Automovel: Adiciona um novo autom�vel no banco de dados com as informa��es passadas no corpo da requisi��o.

# GET api/Automovel/{id}: Retorna o autom�vel com o id especificado na rota. Se n�o existir um autom�vel com esse id, retorna um c�digo de resposta HTTP 404 (not found).

# PUT api/Automovel/{id}: Atualiza as informa��es do autom�vel com o id especificado na rota com as informa��es passadas no corpo da requisi��o. Se n�o existir um autom�vel com esse id, retorna um c�digo de resposta HTTP 404 (not found).

# DELETE api/Automovel/{id}: Remove o autom�vel com o id especificado na rota do banco de dados. Se n�o existir um autom�vel com esse id, retorna um c�digo de resposta HTTP 404 (not found).

O controlador utiliza a classe Automovel como modelo para representar os dados dos autom�veis, e todas as opera��es de acesso ao banco de dados s�o feitas de forma ass�ncrona.
