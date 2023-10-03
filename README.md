# Documentação do Projeto

## Desafio
Desenvolver uma aplicação web responsável por administrar alunos, professores e cursos. Soluções parciais serão aceitas.

## Funcionalidades

### Visão de Administrador

#### 1. Gerenciamento de Usuários
- Incluir, excluir, atualizar e visualizar usuários.

### Visão de Coordenador de Cursos

#### 2. Gerenciamento de Semestres
- Incluir, excluir, atualizar e visualizar semestres.

#### 3. Gerenciamento de Cursos
- Incluir, excluir, atualizar e visualizar cursos.

#### 4. Gerenciamento de Disciplinas
- Incluir, excluir, atualizar e visualizar disciplinas.

#### 5. Montagem da Matriz Curricular
- Realizar a montagem da matriz curricular, vinculando cursos, disciplinas e semestres.

### Visão de Professor e Aluno

#### 6. Visualização da Matriz Curricular
- Visualizar a matriz curricular, exibindo os cursos, disciplinas e semestres.

## Tecnologias Utilizadas

- Backend: Spring Boot
- Frontend: Angular

## Interação entre Backend e Frontend

- O backend foi desenvolvido em Spring Boot e fornece uma API para o frontend acessar e manipular os dados.
- O frontend, desenvolvido em Angular, interage com a API do backend para realizar operações de CRUD e exibir informações para os usuários.

## Instalação e Execução

Siga estas etapas para instalar e executar o projeto:

### Backend (Spring Boot)

#### 1. Baixe o arquivo ZIP do repositório do backend no GitHub [aqui](https://github.com/Linjohson/school-control/archive/master.zip) e extraia-o para o seu ambiente local.

#### 2. Navegue até o diretório do backend:
  - cd school-control-master/School-control-backend
#### 3. Instale as dependências do projeto:
  - npm install
#### 4. Inicie o servidor Spring Boot:
  - ./mvnw spring-boot:run
   
### Frontend (Angular)
#### 1. Baixe o arquivo ZIP do repositório do backend no GitHub [aqui](https://github.com/Linjohson/school-control/archive/master.zip) e extraia-o para o seu ambiente local.
#### 2. Navegue até o diretório do frontend:
  - cd school-control-master/School-control-frontend
#### 3. Através do git bash here
  - Faça um "git checkout masterFrontend"
#### 4. Instale as dependências do projeto:
  - npm install
#### 5. Inicie o servidor de desenvolvimento:
  - ng serve

## Suposições
Durante o desenvolvimento deste projeto, essa suposição foi feita para simplificar o escopo e a implementação. Estas suposições incluem:

- Suposição: Os seguintes usuários e senhas foram pré-definidos para fins de desenvolvimento e teste:
  - Administrador: 
    - Usuário: admin
    - Senha: admin

  - Coordenador: 
    - Usuário: coordenador
    - Senha: coordenador

  - Professor: 
    - Usuário: professor
    - Senha: professor

  - Aluno: 
    - Usuário: aluno
    - Senha: aluno

  Estes valores são utilizados apenas para simplificar o acesso durante o desenvolvimento e não devem ser utilizados em ambientes de produção ou em situações de segurança crítica.


## Desenvolvedor

- [Linjohson Guimarães] - Desenvolvedor Backend
- [Linjohson Guimarães] - Desenvolvedor Frontend

