import { text, timestamp, varchar, date } from 'drizzle-orm/pg-core' // Removido 'integer' do import
import { pgTable } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const students = pgTable('students', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('name').notNull(),
  registrationNumber: text('registration_number').notNull().unique(),
  studentClass: text('student_class').notNull(), // Ajuste para manter consistência
  guardianName: text('guardian_name'),

  // Novos campos adicionados para adequar aos dados dos alunos
  dateOfBirth: date('date_of_birth').notNull(),
  sex: varchar('sex', { length: 1 }).notNull(), // 'M' ou 'F'
  race: varchar('race', { length: 50 }),
  motherName: text('mother_name').notNull(),
  fatherName: text('father_name'),
  addressType: varchar('address_type', { length: 50 }),
  address: text('address'),
  addressNumber: varchar('address_number', { length: 10 }),
  addressComplement: text('address_complement'),
  cep: varchar('cep', { length: 20 }),
  municipality: varchar('municipality', { length: 100 }).notNull(),
  neighborhood: varchar('neighborhood', { length: 100 }),
  phone1: varchar('phone_1', { length: 20 }),
  phone2: varchar('phone_2', { length: 20 }),
  email: text('email'),
  googleEmail: text('google_email'),
  latitude: varchar('latitude', { length: 50 }),
  longitude: varchar('longitude', { length: 50 }),

  // Informações adicionais do aluno
  nationality: varchar('nationality', { length: 50 }).notNull(), // Ex: 'Brasileiro Nato'
  countryOfBirth: varchar('country_of_birth', { length: 50 }),
  ufOfBirth: varchar('uf_of_birth', { length: 2 }), // Ex: 'AM'
  cityOfBirth: varchar('city_of_birth', { length: 100 }),

  // Certidão Civil
  civilRegistryType: varchar('civil_registry_type', { length: 50 }), // Ex: 'Nascimento'
  civilRegistryTerm: varchar('civil_registry_term', { length: 50 }),
  civilRegistryBook: varchar('civil_registry_book', { length: 50 }),
  civilRegistryPage: varchar('civil_registry_page', { length: 50 }),
  civilRegistryNumber: text('civil_registry_number'),

  // Documento de Identificação
  rg: varchar('rg', { length: 20 }),
  issuingOrg: varchar('issuing_org', { length: 50 }),
  cpf: varchar('cpf', { length: 20 }),

  // Dados complementares
  maritalStatus: varchar('marital_status', { length: 50 }),
  bloodType: varchar('blood_type', { length: 5 }),
  susNumber: varchar('sus_number', { length: 20 }),
  nisNumber: varchar('nis_number', { length: 20 }),

  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
