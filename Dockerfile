FROM node:18-alpine

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy seluruh project
COPY . .

# ✅ Generate Prisma Client terlebih dahulu
RUN npx prisma generate

# ✅ Baru build Next.js
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
