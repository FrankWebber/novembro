// Corrigindo os imports corretos do drizzle-orm
import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

// Definindo a tabela 'guardians' com as colunas necessárias
export const guardians = pgTable('guardians', {
  id: text('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  relationship: varchar('relationship', { length: 100 }),
  studentId: varchar('student_id', { length: 50 }).notNull(),
  phone: varchar('phone', { length: 20 }), // Novo campo para telefone
  email: varchar('email', { length: 255 }), // Novo campo para email
})
