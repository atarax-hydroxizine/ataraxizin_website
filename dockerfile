FROM node:20-slim

WORKDIR /app

# Установите необходимые системные зависимости
RUN apt-get update && apt-get install -y \
    openssl \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# Устанавливаем все зависимости включая devDependencies
RUN npm install

COPY . .
RUN npx prisma generate

# Только сборка приложения, без обращения к БД
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma db push && npx prisma db seed && npm start"]