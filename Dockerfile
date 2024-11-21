# Etapa 1: Construir a aplicação com Node.js
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Executar o comando de build do Vite (ou React)
RUN npm run build

# Etapa 2: Configurar o servidor Nginx para servir o build
FROM nginx:alpine

# Copiar o conteúdo do build para o diretório público do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
