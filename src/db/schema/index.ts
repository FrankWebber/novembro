// Arquivo: src/db/schema/index.ts

import { pgTable, serial, text, varchar, integer, timestamp } from 'drizzle-orm/pg-core';

// Definindo a tabela "users"
export const users = pgTable('users', {
  id: serial('id').primaryKey(), // Chave primária autoincrementável
  username: varchar('username', { length: 50 }).notNull(), // Campo username, não nulo
  email: varchar('email', { length: 100 }).notNull(), // Campo email, não nulo
  password: text('password').notNull(), // Campo password, não nulo
  createdAt: timestamp('created_at').defaultNow(), // Timestamp de criação com valor padrão "agora"
});

// Definindo a tabela "posts"
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(), // Chave primária autoincrementável
  title: varchar('title', { length: 255 }).notNull(), // Título do post, não nulo
  content: text('content').notNull(), // Conteúdo do post, não nulo
  userId: integer('user_id').references(() => users.id), // Relacionamento com a tabela "users"
  createdAt: timestamp('created_at').defaultNow(), // Timestamp de criação com valor padrão "agora"
});

// Definindo a tabela "comments"
export const comments = pgTable('comments', {
  id: serial('id').primaryKey(), // Chave primária autoincrementável
  content: text('content').notNull(), // Conteúdo do comentário, não nulo
  postId: integer('post_id').references(() => posts.id), // Relacionamento com a tabela "posts"
  userId: integer('user_id').references(() => users.id), // Relacionamento com a tabela "users"
  createdAt: timestamp('created_at').defaultNow(), // Timestamp de criação com valor padrão "agora"
});
