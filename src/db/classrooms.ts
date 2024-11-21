// Arquivo schema para a tabela de turmas
import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const classrooms = pgTable('classrooms', {
  id: text('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  teacherId: varchar('teacher_id', { length: 50 }).notNull(),
});
