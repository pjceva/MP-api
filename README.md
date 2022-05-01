<h1>#Projeto de disciplina da matéria Métodos de Programação <h1>

Pedro José Monteiro de Barros Ceva Rodrigues 190139315
Gabriel Carvalho Moretto 150154917

Sistema de Recomendação de música

Feito no Ruby on rails, front-end feito no Ruby.

Padrão de codificação: [Ruby Style Guide](https://rubystyle.guide/).

Verificador de padrão de codificação: [Rubocop](https://github.com/rubocop/rubocop).

Framework de teste usado: [Rspec](https://rspec.info/).

Ferramenta de documentação: [Rdocs](https://github.com/ruby/rdoc).

Verificador de cobertura de código: [Simplecov](https://github.com/simplecov-ruby/simplecov).

Como rodar o programa:
depois de instalar todos os programas:

se necessário, inicie o servidor com

```sudo service postgresql start```

e caso voce tenha uma versão mais recente do rails, é necessário ajustar a versão com o comando

```rvm use ruby 2.7.4```

depois com o terminal na pasta "music-api" chame o comando

```bundle```

depois

```rails db:reset```

depois

```rails db:migrate```

com tudo isso, podemos iniciar o servidor com

```rails s```

agora, va para a pasta do front "music-front" e chame o comando

```yarn```

depois de

```yarn start```

e a aplicação será iniciada depois de um tempo que foi chamado o comando, voce pode acessar no browser com o endereço

"localhost:2000"

(geralmente as aplicações em rails são usadas no localhost:3000, porém já que estamos usando o react, optamos por colocar na porta 2000)

para terminar a aplicação, termine o servidor no backend usando o atalho "crt+s", e é recomendado terminar o servidor do postgre, para isso use o comando

```sudo service postgresql stop```

