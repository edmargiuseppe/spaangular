# Criação de uma aplicação utilizando o Angular Cli.

Programas utilizados:
Node.js
Angular Cli
Visual Studio Code

## Criando a aplicação:

1 - Criar uma pasta para criar o projeto.

2 - Abrir o terminal cmd, navegar até esta pasta e digitar o seguinte comando: ng new spaangular --prefix=spa enter

spaangular: é o nome da aplicação
--prefix=spa: não é obrigatório porém ajuda a identificar os componentes criados pois, vão ter este prefixo. 

2.1 - Primeira pergunta: Would you like to add angular routing?(y/n)
Você gostaria de adicionar uma rota angular? Y

2.2 - Segunda pergunta: Which stylesheet format would you like to use?
Qual o formato de estilo você vai querer utilizar? css

Iniciará a criação do projeto.


3 - Abrir o Projeto no Visual Studio Code.

3.1 -Algumas pastas importantes.

package.json: contém todas as dependencias da aplicação.

pasta source: dentro desta pasta cria-se a estrutura que iremos trabalhar, ela contém a pasta app que é onde ficam os nossos componentes.

app.module.ts: onde registramos todos os nossos componentes.

assets: ficam todos os arquivos externos como imagens, estilos css, etc.

environment: possui a configuração de variáveis, e onde definimos se ficará em produção ou não.

angular.js: onde ficam todas as configurações do angular.

app-routing.module: responsável pelas rotas.

4 - Digitar no terminal: ng serve -o
4.2 - Vai inicializar o servidor e abrir a aplicaçao no navegador.

4.3 - Sempre que formos utilizar um novo componente, temos que informar o app.module.ts. É nele que colocamos as importações para que o projeto entenda que estamos utilizando o componente.

5 - Para criar um componente precida digitar no terminal: ng g c nome-do-componente.
g = generate
c = componente

5.1 - Será gerado o componente na pasta app que fica dentro do source.

5.2 - Neste caso, a aplicação já faz automaticamente a importação no app.module.ts.

6 - Angular Material: site com componentes prontos que podem ser usados na aplicação.

6.1 - Clicando em Getting Started, ele mostrará o que precisamos fazer em nossa aplicação para utilizarmos estes componentes.

6.2 - Deve-se digitar no terminal: ng add @angular/material

6.3 - No site, escolhe-se o componente, tem o overview, que mostra o que ele faz. Tem a API, que devemos importar sempre que formos utilizar, para que a aplicação saiba que o mesmo existe. No exemplo, clicando no code, conseguimos copiar o html e o css do componente, para colar no nosso projeto.