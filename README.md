# Monitore - Inovação em Controle de Frequência Escolar

**Monitore** é um sistema desenvolvido para combater a evasão escolar e melhorar o gerenciamento da frequência dos estudantes, integrando pais, professores, gestores e outros stakeholders envolvidos na educação. O objetivo é fornecer uma plataforma centralizada e eficiente para monitorar a frequência dos alunos, facilitar a comunicação entre a escola e a família, e permitir intervenções rápidas e eficazes.

## Funcionalidades
- **Monitoramento em Tempo Real**: Uso de geolocalização para acompanhar a presença dos alunos durante o horário escolar.
- **Notificações e Alertas**: Envio de notificações em tempo real para os pais e gestores sobre a presença ou ausência dos alunos.
- **Relatórios de Frequência**: Geração de relatórios que ajudam a identificar padrões de ausência.
- **Facilitação da Comunicação**: Centraliza a comunicação entre pais, alunos e a escola, mantendo todos informados.

## Tecnologias Utilizadas
- **Frontend**: Desenvolvido com **React.js** e **Vite**.
- **Backend**: Utiliza **Node.js** com **Express** e banco de dados **PostgreSQL**.
- **Containerização**: Docker e Docker Compose para gerenciar a infraestrutura.
- **ORM**: Drizzle ORM para interação com o banco de dados PostgreSQL.

## Estrutura do Projeto
- **Frontend**: Localizado na pasta `/frontend`, desenvolvido em React, oferece a interface para os usuários (alunos, pais e gestores).
- **Backend**: Localizado na pasta `/backend`, é responsável pelo processamento de dados, gestão de usuários e integração com o banco de dados.
- **Banco de Dados**: Utiliza PostgreSQL para armazenamento de informações dos alunos, professores, aulas e relatórios de frequência.
- **Docker**: Arquivo `docker-compose.yml` para criar containers do backend, frontend e banco de dados.

## Instalação e Configuração

### Requisitos
- Docker e Docker Compose instalados.
- Node.js e npm (opcional, caso não use Docker).

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/FrankWebber/monitore.git
   cd monitore
   ```

2. Inicie os containers Docker:
   ```bash
   docker-compose up --build -d
   ```
   Isso iniciará os containers para o backend, frontend e banco de dados.

3. Acesse a aplicação:
   - **Frontend**: `http://localhost:3000`
   - **Adminer (gerenciador do banco de dados)**: `http://localhost:8080`

### Configuração do Banco de Dados
O banco de dados é configurado automaticamente no Docker Compose, e os dados de acesso são:
- **Usuário**: `webber`
- **Senha**: `webber`
- **Nome do Banco**: `bases`

Você pode acessar o Adminer em `http://localhost:8080` para gerenciar os dados.

## Uso do Sistema

- **Login**: Usuários podem se autenticar como alunos, pais, professores ou gestores.
- **Consulta de Frequência**: Pais e gestores podem consultar relatórios detalhados sobre a frequência dos alunos.
- **Notificações em Tempo Real**: O sistema envia notificações para dispositivos conectados informando sobre eventos relevantes, como ausências.

## Scripts Disponíveis
- **Frontend**: Para desenvolvimento do frontend, acesse a pasta `/frontend` e use:
  ```bash
  npm install
  npm run dev
  ```
- **Backend**: Para o backend, acesse a pasta `/backend` e use:
  ```bash
  npm install
  npm start
  ```

## Desenvolvimento e Contribuição
Sinta-se à vontade para contribuir com este projeto. Para isso, faça um fork do repositório, crie uma branch com suas modificações e envie um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## Contato
Para qualquer dúvida ou sugestão, entre em contato:

- **Email**: educatechnov@gmail.com / frankwebber33@hotmail.com
