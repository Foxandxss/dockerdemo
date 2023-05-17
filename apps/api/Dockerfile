FROM node:18-alpine3.15 AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx nx build api

FROM node:18-alpine3.15 AS runner

# EXPOSE 3000/tcp
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY --from=builder /app/dist/apps/api ./dist

CMD ["node", "dist/main"]
