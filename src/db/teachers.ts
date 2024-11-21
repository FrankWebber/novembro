import { text, timestamp, varchar, integer, date } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const teachers = pgTable('teachers', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('name').notNull(),
  registrationNumber: text('registration_number').notNull(), // Pode haver mais de uma matrícula para um mesmo professor
  ilsNumber: text('ils_number').notNull(),
  status: varchar('status', { length: 50 }).notNull(), // Status como 'ATIVO', 'EXERCICIO REGULAR'
  administrativeUnit: text('administrative_unit'),
  role: text('role').notNull(), // Ex: 'PROFESSOR PF40.ESP-III'
  schoolCode: text('school_code'),
  schoolName: text('school_name'),
  municipality: varchar('municipality', { length: 100 }),
  assignmentStatus: varchar('assignment_status', { length: 50 }),
  function: text('function'),
  assignmentType: varchar('assignment_type', { length: 50 }), // Ex: 'EFETIVO'
  startAssignment: date('start_assignment'),
  endAssignment: date('end_assignment'),
  inclusionDate: date('inclusion_date'),
  modificationDate: date('modification_date'),
  shift: varchar('shift', { length: 50 }), // Ex: 'VESPERTINO', 'NOTURNO'
  workload: integer('workload'), // Carga horária
  habilitation: text('habilitation'), // Ex: 'GEOGRAF LI LIBR'
  year: integer('year'),

  // Horário
  monday: text('monday'), // Detalhes dos horários de cada dia
  tuesday: text('tuesday'),
  wednesday: text('wednesday'),
  thursday: text('thursday'),
  friday: text('friday'),
  saturday: text('saturday'),

  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
