# Stage 1: Build the application
FROM node:22.9.0-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --prod
COPY . .

# Stage 2: Run the application in a minimal environment
FROM node:22.9.0-alpine AS runtime
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app .
CMD ["node", "index.js"]
