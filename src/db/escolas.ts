// C:\Users\Frank Webber\Documents\GitHub\monitor-inspiration\src\db\schema\escolas.ts
import { pgTable, varchar, text } from 'drizzle-orm/pg-core'

export const escolas = pgTable('escolas', {
  id: text('id').primaryKey(), // Usando 'text' como tipo para o campo 'id'
  nome: varchar('nome', { length: 255 }).notNull(),
  nomeReduzido: varchar('nome_reduzido', { length: 255 }),
  codigoInep: varchar('codigo_inep', { length: 20 }),
  municipio: varchar('municipio', { length: 100 }).notNull(),
  bairro: varchar('bairro', { length: 100 }),
  logradouro: varchar('logradouro', { length: 255 }),
  numero: varchar('numero', { length: 10 }),
  complemento: text('complemento'),
  distrito: varchar('distrito', { length: 100 }),
  cep: varchar('cep', { length: 20 }),
  latitude: varchar('latitude', { length: 50 }),
  longitude: varchar('longitude', { length: 50 }),
  telefone1: varchar('telefone_1', { length: 20 }),
  telefone2: varchar('telefone_2', { length: 20 }),
  fax: varchar('fax', { length: 20 }),
  ramalGestor: varchar('ramal_gestor', { length: 20 }),
  telefoneGestor: varchar('telefone_gestor', { length: 20 }),
  ramalSecretaria: varchar('ramal_secretaria', { length: 20 }),
  telefoneSecretaria: varchar('telefone_secretaria', { length: 20 }),
  email: varchar('email', { length: 255 }),
  diretor: varchar('diretor', { length: 255 }),
  secretario: varchar('secretario', { length: 255 }),
})
