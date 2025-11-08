# Stage 1 — Build
FROM node:20-alpine AS build
WORKDIR /app

# Copia arquivos de dependências e instala
COPY package*.json ./
RUN npm ci

# Copia o restante do código e gera o build
COPY . .
RUN npm run build

# Stage 2 — Produção
FROM node:20-alpine
WORKDIR /app

# instalar nano (pacote do sistema)
RUN apk add --no-cache nano

# Instala servidor estático leve
RUN npm install -g serve

# Copia apenas os arquivos gerados no build
COPY --from=build /app/dist ./dist

# Expõe a porta
EXPOSE 8080

# Comando padrão para rodar o servidor
CMD ["serve", "-s", "dist", "-l", "8080"]
