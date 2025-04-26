FROM node:23-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
