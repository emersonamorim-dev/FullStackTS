# Frontend TS

Codificação em Angular programando em TypeScript para consumo de Backend programado em C# com Banco de Dados Microsoft SQL.
Uso de biblioteca para customizar o Frontend com Material, NgPrime, NgBootstrap.

O componente AddPessoaComponent, apresentado é um componente em Angular chamado que é responsável por exibir uma interface para adicionar novas pessoas ao sistema. Ele é composto por uma classe com variáveis, métodos e um construtor.

# Algumas das variáveis presentes na classe incluem:

pessoaDialog: boolean - que controla a exibição ou não de uma janela de diálogo para adicionar/editar uma pessoa.
selectedPessoas: Pessoa[] - que armazena as pessoas selecionadas pelo usuário.
submitted: boolean - que controla se o formulário de adição de pessoa foi submetido ou não.
pessoa: Pessoa[] - que armazena todas as pessoas recuperadas do servidor.
pessoas: Pessoa - que armazena a pessoa atualmente selecionada para edição.
addPessoaForm: FormGroup - que representa o formulário para adicionar uma nova pessoa.
addPessoaRequest: Pessoa - que armazena os dados inseridos.

# Algumas das funções/métodos presentes na classe incluem:

ngOnInit() - que é executado quando o componente é inicializado e busca todas as pessoas do servidor para exibição.
addPessoa() - que é executado quando o usuário clica em "Adicionar" no formulário de adição de pessoa e envia uma solicitação ao servidor para adicionar a nova pessoa.
openNew() - que é executado quando o usuário clica em "Adicionar Pessoa" e exibe uma janela de diálogo para adicionar/editar uma pessoa.
editPessoa() - que é executado quando o usuário clica em "Editar" na tabela de pessoas e preenche o formulário de adição de pessoa com os dados da pessoa selecionada.
confirm() - que é executado quando o usuário clica em "Excluir" na tabela de pessoas e exibe uma janela de confirmação para confirmar a exclusão da pessoa selecionada.
hideDialog() - que é executado quando o usuário fecha a janela de diálogo de adição/editação de pessoa.
findIndexById() - que é executado para encontrar o índice da pessoa na lista de pessoas com base no seu ID.
createId() - que é executado para gerar um ID aleatório para uma nova pessoa.


# O que faz o PessoasService.ts
o código chamdo como Pessoaservices em Angular  é responsável por realizar operações CRUD (criação, leitura, atualização e exclusão) na API RESTful relacionada às entidades Pessoa.

O serviço importa o HttpClient e HttpHeaders do pacote @angular/common/http e o Observable do pacote rxjs. Ele também importa a classe Pessoa do modelo Pessoa, que é definido em outro arquivo.

O serviço é decorado com o @Injectable e é fornecido no escopo raiz, o que significa que ele é injetável em toda a aplicação.

O serviço possui uma propriedade chamada baseApiUrl que armazena a URL base para a API RESTful, obtida do arquivo environment.ts.

# O serviço possui métodos para executar as seguintes operações na API RESTful:
getAllPessoas(): retorna um Observable de uma matriz de objetos Pessoa, que é obtido ao enviar uma solicitação GET para a URL da API this.baseApiUrl + '/api/Pessoa'.
addPessoa(addPessoaRequest: Pessoa): cria uma nova pessoa enviando uma solicitação POST para a URL da API this.baseApiUrl + '/api/Pessoa' com a pessoa a ser adicionada como corpo da solicitação. O método retorna um Observable que emite a pessoa adicionada.
getPessoa(id: string): retorna um Observable de um objeto Pessoa específico obtido ao enviar uma solicitação GET para a URL da API this.baseApiUrl + '/api/Pessoa/' + id.
updatePessoa(id: string, updatedPessoaRequest: Pessoa): atualiza uma pessoa existente enviando uma solicitação PUT para a URL da API this.baseApiUrl + '/api/Pessoa/' + id com a pessoa atualizada como corpo da solicitação. O método retorna um Observable que emite a pessoa atualizada.
deletePessoa(id: string): exclui uma pessoa existente enviando uma solicitação DELETE para a URL da API this.baseApiUrl + '/api/Pessoa/' + id. O método retorna um Observable que emite a pessoa excluída.

# O Automovelservices.ts é um serviço Angular para gerenciar a comunicação com um backend que fornece dados de automóveis. 
Ele importa o módulo HttpClient e as interfaces Observable e HttpHeaders, e utiliza a injeção de dependência do Angular.

O serviço possui um construtor que recebe o HttpClient e armazena a URL base da API em baseApiUrl. O serviço fornece vários métodos para consumir endpoints da API, incluindo:

getAllAutomovel(): que realiza uma solicitação HTTP GET para recuperar uma lista de objetos Automovel do endpoint /api/Automovel.

addAutomovel(addAutomovelRequest: Automovel): que realiza uma solicitação HTTP POST para adicionar um objeto Automovel ao endpoint /api/Automovel. O objeto é passado como parâmetro.

getAutomovel(id: string): que realiza uma solicitação HTTP GET para recuperar um objeto Automovel específico do endpoint /api/Automovel/id, onde id é passado como parâmetro.

updateAutomovel(id: string, updatedAutomovelRequest: Automovel): que realiza uma solicitação HTTP PUT para atualizar um objeto Automovel específico no endpoint /api/Automovel/id, onde id é passado como parâmetro. O objeto atualizado é passado como parâmetro.

deleteAutomovel(id: string): que realiza uma solicitação HTTP DELETE para remover um objeto Automovel específico do endpoint /api/Automovel/id, onde id é passado como parâmetro.


# Backend TS

Codificação usando DonetCore 6.0 programado em C# com uso de Framework Microsoft Entity Framework para facilitar implementaçao do código.

# Para rodar a aplicação é necessário instalar os seguintes pacotes:
Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.Migrations, Microsoft SQL isso pode ser feito através do Gerenciador de Pacotes do Visual Studio o NuGet

Depois de instalado é necessário seguintes comandos no Backend. Abra o terminal Package Manager Console e rode os comandos:

dotnet build
dotnet restore
dotnet ef database update --project BackendTS
Esse útimo comando vai subir as tabelas para o Banco de dados Microsoft SQL e lógico é necessário verificar se não existe nenhum erro na migrations ou no mesmo no código.

# Segue uma breve descrição de como funciona os Controller dentro do Backend:

Controller de Pessoa
Este é um controlador ASP.NET Core MVC que manipula a entidade "Pessoa" em um aplicativo de Backend. O controlador define endpoints HTTP para criar, ler, atualizar e excluir pessoas no banco de dados.

O PessoaController.ts é O controlador define as seguintes rotas:

GET api/Pessoa: retorna uma lista de todas as pessoas no banco de dados.
GET api/Pessoa/{id}: retorna uma pessoa específica com base no ID fornecido.
POST api/Pessoa: cria uma nova pessoa com base nos dados fornecidos no corpo da solicitação.
PUT api/Pessoa/{id}: atualiza uma pessoa existente com base no ID fornecido e nos dados fornecidos no corpo da solicitação.
DELETE api/Pessoa/{id}: exclui uma pessoa existente com base no ID fornecido.

# Dependências
O controlador depende de um objeto FullStackDbWContext para se comunicar com o banco de dados. O objeto FullStackDbContext é injetado por meio do construtor do controlador.

# Utilização
O controlador pode ser usado como parte de um aplicativo ASP.NET Core. Para usar o controlador, basta configurar as rotas apropriadas no arquivo Startup.cs do aplicativo e injetar as dependências necessárias no construtor do controlador.

# Descrição do Controller Automovel
O AutomovelController é um controlador ASP.NET Core que trata requisições HTTP para gerenciar informações sobre automóveis. Ele é responsável por acessar e manipular informações armazenadas no banco de dados FullStackDbContext, que é injetado por meio de sua construtora.

O controlador possui as seguintes rotas e métodos HTTP:

GET api/Automovel: Retorna todos os automóveis armazenados no banco de dados.

POST api/Automovel: Adiciona um novo automóvel no banco de dados com as informações passadas no corpo da requisição.

GET api/Automovel/{id}: Retorna o automóvel com o id especificado na rota. Se não existir um automóvel com esse id, retorna um código de resposta HTTP 404 (not found).

PUT api/Automovel/{id}: Atualiza as informações do automóvel com o id especificado na rota com as informações passadas no corpo da requisição. Se não existir um automóvel com esse id, retorna um código de resposta HTTP 404 (not found).

DELETE api/Automovel/{id}: Remove o automóvel com o id especificado na rota do banco de dados. Se não existir um automóvel com esse id, retorna um código de resposta HTTP 404 (not found).

O controlador utiliza a classe Automovel como modelo para representar os dados dos automóveis, e todas as operações de acesso ao banco de dados são feitas de forma assíncrona.
