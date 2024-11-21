// Arquivo: drizzle.config.ts

import { defineConfig } from 'drizzle-kit';
import env from './src/env'; // Importando as variáveis validadas do env.ts

export default defineConfig({
  schema: './src/db/schema.ts', // Caminho corrigido para o arquivo onde estão as definições de tabelas
  out: './migrations', // Pasta onde serão salvas as migrations
  dbCredentials: {
    database: env.DATABASE_NAME, // Nome do banco de dados
    user: env.DATABASE_USER, // Usuário do banco de dados
    password: env.DATABASE_PASSWORD, // Senha do banco de dados
    host: env.DATABASE_HOST, // Host do banco de dados
    port: env.DATABASE_PORT, // Porta do banco de dados
    ssl: false, // Desativar SSL
  },
  dialect: 'postgresql', // Corrigido para 'postgresql'
});
