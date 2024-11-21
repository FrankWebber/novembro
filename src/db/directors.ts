import { text, varchar, integer, timestamp } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const directors = pgTable('directors', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),

  name: text('name').notNull(),
  ils: varchar('ils', { length: 50 }).notNull(),
  registrationNumber: varchar('registration_number', { length: 20 })
    .notNull()
    .unique(),
  personalEmail: varchar('personal_email', { length: 255 }),
  administrativeEmail: varchar('administrative_email', { length: 255 }),
  schoolName: text('school_name'),
  schoolCode: varchar('school_code', { length: 20 }),
  schoolMunicipality: text('school_municipality'),
  workStatus: varchar('work_status', { length: 50 }).notNull(), // e.g. "ATIVO"
  position: varchar('position', { length: 100 }), // e.g. "DIRETOR"
  shift: varchar('shift', { length: 50 }), // e.g. "VESPERTINO"
  workload: integer('workload'), // e.g. 20 horas
  inclusionDate: timestamp('inclusion_date', { withTimezone: true }),
  modificationDate: timestamp('modification_date', { withTimezone: true }),
  contactPhone: varchar('contact_phone', { length: 20 }),
  managerPhone: varchar('manager_phone', { length: 20 }),
  cep: varchar('cep', { length: 20 }),
  address: text('address'),
  district: text('district'),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
