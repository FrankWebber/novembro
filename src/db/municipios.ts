// Arquivo schema para a tabela de municípios
import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const municipios = pgTable('municipios', {
  id: text('id').primaryKey(),
  nome: varchar('nome', { length: 255 }).notNull(),
  estado: varchar('estado', { length: 100 }).notNull(),
});
