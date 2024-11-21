// Arquivo: src/env.ts

import dotenv from 'dotenv';
import { z } from 'zod';

// Carregar as variáveis de ambiente do .env
dotenv.config();

// Definindo o esquema de validação das variáveis de ambiente usando Zod
const envSchema = z.object({
  DATABASE_NAME: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.string().regex(/^\d+$/).transform(Number), // Porta deve ser numérica
});

// Validação e extração das variáveis de ambiente
const env = envSchema.parse(process.env);

// Exportar as variáveis de ambiente validadas para uso em outros arquivos
export default env;
