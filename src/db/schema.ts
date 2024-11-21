// Arquivo: src/db/schema.ts

import { pgTable, text, integer, timestamp, varchar, boolean, time } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

// Definindo a tabela "students"
export const students = pgTable('students', {
  id: text('id').default(createId()).primaryKey(),
  name: text('name').notNull(),
  registrationNumber: text('registration_number').notNull().unique(),
  studentClass: text('student_class').notNull(),
  dateOfBirth: varchar('date_of_birth', { length: 10 }).notNull(),
  sex: varchar('sex', { length: 10 }).notNull(),
  race: text('race'),
  motherName: text('mother_name'),
  fatherName: text('father_name'),
  addressType: text('address_type'),
  address: text('address'),
  addressNumber: text('address_number'),
  cep: text('cep'),
  municipality: text('municipality'),
  neighborhood: text('neighborhood'),
  phone1: varchar('phone1', { length: 20 }),
  phone2: varchar('phone2', { length: 20 }),
  emailGoogle: text('email_google'),
  nationality: text('nationality'),
  ufOfBirth: text('uf_of_birth'),
  cityOfBirth: text('city_of_birth'),
  cpf: text('cpf').notNull(),
  maritalStatus: text('marital_status'),
  bloodType: text('blood_type'),
  susNumber: text('sus_number'),
  locationTrackingEnabled: boolean('location_tracking_enabled').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

// Definindo a tabela "studentLessons"
export const studentLessons = pgTable('student_lessons', {
  studentId: text('student_id').references(() => students.id).notNull(), // Referência ao aluno
  lessonId: integer('lesson_id').references(() => lessons.id).notNull(), // Referência à aula
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
});

// Definindo outras tabelas (exemplos)
export const guardians = pgTable('guardians', {
  id: text('id').default(createId()).primaryKey(),
  name: text('name').notNull(),
  relationship: text('relationship').notNull(),
  studentId: text('student_id').references(() => students.id).notNull(),
  phone: varchar('phone', { length: 15 }).notNull(),
  email: text('email').notNull(),
});

export const schools = pgTable('schools', {
  id: text('id').default(createId()).primaryKey(),
  nome: text('nome').notNull(),
  nomeReduzido: text('nome_reduzido').notNull(),
  codigoInep: text('codigo_inep').notNull(),
  municipio: text('municipio').notNull(),
  bairro: text('bairro').notNull(),
  logradouro: text('logradouro').notNull(),
  numero: text('numero').notNull(),
  distrito: text('distrito'),
  cep: text('cep').notNull(),
  latitude: varchar('latitude', { length: 50 }),
  longitude: varchar('longitude', { length: 50 }),
  telefone1: varchar('telefone1', { length: 20 }),
  telefone2: varchar('telefone2', { length: 20 }),
  ramalGestor: varchar('ramal_gestor', { length: 20 }),
  telefoneGestor: varchar('telefone_gestor', { length: 20 }),
  ramalSecretaria: varchar('ramal_secretaria', { length: 20 }),
  telefoneSecretaria: varchar('telefone_secretaria', { length: 20 }),
  email: text('email'),
  diretor: text('diretor'),
  secretario: text('secretario'),
});

// As outras tabelas continuam como estão, incluindo directors, teachers, councils, classes, lessons, etc.


// Definindo a tabela "directors"
export const directors = pgTable('directors', {
  id: text('id').default(createId()).primaryKey(),
  name: text('name').notNull(),
  ils: text('ils'),
  registrationNumber: text('registration_number').notNull(),
  workStatus: text('work_status'),
  administrativeUnit: text('administrative_unit'),
  position: text('position'),
  schoolCode: text('school_code'),
  schoolName: text('school_name'),
  municipality: text('municipality'),
  assignmentStatus: text('assignment_status'),
  function: text('function'),
  startAssignment: varchar('start_assignment', { length: 10 }).notNull(),
  endAssignment: varchar('end_assignment', { length: 10 }).notNull(),
  inclusionDate: varchar('inclusion_date', { length: 10 }),
  modificationDate: varchar('modification_date', { length: 10 }),
  shift: text('shift'),
  workload: integer('workload'),
  habilitation: text('habilitation'),
  cpf: text('cpf').notNull(),
});

// Definindo a tabela "teachers"
export const teachers = pgTable('teachers', {
  id: text('id').default(createId()).primaryKey(),
  name: text('name').notNull(),
  ilsNumber: text('ils_number'),
  registrationNumber: text('registration_number').notNull(),
  status: text('status'),
  administrativeUnit: text('administrative_unit'),
  role: text('role'),
  schoolCode: text('school_code'),
  schoolName: text('school_name'),
  municipality: text('municipality'),
  assignmentStatus: text('assignment_status'),
  function: text('function'),
  startAssignment: varchar('start_assignment', { length: 10 }).notNull(),
  endAssignment: varchar('end_assignment', { length: 10 }).notNull(),
  inclusionDate: varchar('inclusion_date', { length: 10 }),
  modificationDate: varchar('modification_date', { length: 10 }),
  shift: text('shift'),
  workload: integer('workload'),
  cpf: text('cpf').notNull(),
});

// Definindo a tabela "councils"
export const councils = pgTable('councils', {
  id: text('id').default(createId()).primaryKey(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  email: text('email').notNull(),
  coordinator: text('coordinator').notNull(),
});

// Definindo a tabela "classes"
export const classes = pgTable('classes', {
  id: integer('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  grade: varchar('grade', { length: 50 }).notNull(), // Ex: 9º Ano
  schoolId: text('school_id').references(() => schools.id).notNull(),
  turn: varchar('turn', { length: 50 }).notNull(), // Ex: Vespertino, Matutino
});

// Definindo a tabela "lessons"
export const lessons = pgTable('lessons', {
  id: integer('id').primaryKey(),
  subject: varchar('subject', { length: 255 }).notNull(), // Nome da matéria, ex: "Matemática"
  dayOfWeek: varchar('day_of_week', { length: 20 }).notNull(), // Dia da semana, ex: Segunda-Feira
  startTime: time('start_time').notNull(), // Hora de início da aula, ex: '13:00'
  endTime: time('end_time').notNull(), // Hora de fim da aula, ex: '13:45'
  classId: integer('class_id').references(() => classes.id).notNull(), // Referência à turma
  teacherId: text('teacher_id').references(() => teachers.id).notNull(), // Referência ao professor
});

// Definindo a tabela "student_classes"
export const studentClasses = pgTable('student_classes', {
  studentId: text('student_id').references(() => students.id).notNull(), // ID do aluno
  classId: integer('class_id').references(() => classes.id).notNull(), // ID da turma
});

// Definindo a tabela "notifications"
export const notifications = pgTable('notifications', {
  id: integer('id').primaryKey(),
  studentId: text('student_id').references(() => students.id).notNull(), // ID do aluno relacionado à notificação
  recipientType: varchar('recipient_type', { length: 50 }).notNull(), // Tipo do destinatário: 'Pai', 'Diretor', etc.
  recipientId: text('recipient_id').notNull(), // ID do destinatário da notificação (pai, gestor, etc.)
  message: text('message').notNull(), // Conteúdo da notificação
  status: varchar('status', { length: 50 }).notNull(), // Ex: 'Pendente', 'Enviado', 'Lido'
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
