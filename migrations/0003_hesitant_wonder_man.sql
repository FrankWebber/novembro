CREATE TABLE IF NOT EXISTS "councils" (
	"id" text PRIMARY KEY DEFAULT 'crwp7urcgktfupvbslu9e21a' NOT NULL,
	"name" text NOT NULL,
	"address" text NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" text NOT NULL,
	"coordinator" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "directors" (
	"id" text PRIMARY KEY DEFAULT 'fua4i3m95f4v0t8rwjn7u989' NOT NULL,
	"name" text NOT NULL,
	"ils" text,
	"registration_number" text NOT NULL,
	"work_status" text,
	"administrative_unit" text,
	"position" text,
	"school_code" text,
	"school_name" text,
	"municipality" text,
	"assignment_status" text,
	"function" text,
	"start_assignment" varchar(10) NOT NULL,
	"end_assignment" varchar(10) NOT NULL,
	"inclusion_date" varchar(10),
	"modification_date" varchar(10),
	"shift" text,
	"workload" integer,
	"habilitation" text,
	"cpf" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "guardians" (
	"id" text PRIMARY KEY DEFAULT 'r3ug513xf88buqe9mubo2svm' NOT NULL,
	"name" text NOT NULL,
	"relationship" text NOT NULL,
	"student_id" text NOT NULL,
	"phone" varchar(15) NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "schools" (
	"id" text PRIMARY KEY DEFAULT 'g482hd77t7oo3do9hpbcukwk' NOT NULL,
	"nome" text NOT NULL,
	"nome_reduzido" text NOT NULL,
	"codigo_inep" text NOT NULL,
	"municipio" text NOT NULL,
	"bairro" text NOT NULL,
	"logradouro" text NOT NULL,
	"numero" text NOT NULL,
	"distrito" text,
	"cep" text NOT NULL,
	"latitude" varchar(50),
	"longitude" varchar(50),
	"telefone1" varchar(20),
	"telefone2" varchar(20),
	"ramal_gestor" varchar(20),
	"telefone_gestor" varchar(20),
	"ramal_secretaria" varchar(20),
	"telefone_secretaria" varchar(20),
	"email" text,
	"diretor" text,
	"secretario" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teachers" (
	"id" text PRIMARY KEY DEFAULT 'evbchyatrltkhnw56miksvd5' NOT NULL,
	"name" text NOT NULL,
	"ils_number" text,
	"registration_number" text NOT NULL,
	"status" text,
	"administrative_unit" text,
	"role" text,
	"school_code" text,
	"school_name" text,
	"municipality" text,
	"assignment_status" text,
	"function" text,
	"start_assignment" varchar(10) NOT NULL,
	"end_assignment" varchar(10) NOT NULL,
	"inclusion_date" varchar(10),
	"modification_date" varchar(10),
	"shift" text,
	"workload" integer,
	"cpf" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "alerts" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "attendance_reports" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "goal_completions" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "goals" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "locations" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "messages" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "student_guardians" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_goals" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "users" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "alerts" CASCADE;--> statement-breakpoint
DROP TABLE "attendance_reports" CASCADE;--> statement-breakpoint
DROP TABLE "goal_completions" CASCADE;--> statement-breakpoint
DROP TABLE "goals" CASCADE;--> statement-breakpoint
DROP TABLE "locations" CASCADE;--> statement-breakpoint
DROP TABLE "messages" CASCADE;--> statement-breakpoint
DROP TABLE "student_guardians" CASCADE;--> statement-breakpoint
DROP TABLE "user_goals" CASCADE;--> statement-breakpoint
DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "id" SET DEFAULT 'nya5342wt13hkuvu5tp3ght3';--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "date_of_birth" varchar(10) NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "sex" varchar(10) NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "race" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "mother_name" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "father_name" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "address_type" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "address" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "address_number" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "cep" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "municipality" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "neighborhood" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "phone1" varchar(20);--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "phone2" varchar(20);--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "email_google" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "nationality" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "uf_of_birth" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "city_of_birth" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "cpf" text NOT NULL;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "marital_status" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "blood_type" text;--> statement-breakpoint
ALTER TABLE "students" ADD COLUMN "sus_number" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "guardians" ADD CONSTRAINT "guardians_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
