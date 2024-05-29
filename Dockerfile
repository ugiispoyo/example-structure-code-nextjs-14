# Base image
FROM node:20.8.1-alpine as builder

# Set the working directory
WORKDIR /app

# Copy necessary files
COPY . .

# Install dependencies 
RUN npm install

# Install dependencies and build the app
RUN npm run build

# Set up production stage
FROM node:20.8.1-alpine as production
WORKDIR /app

# Create a non-root user and switch to it
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextapp -u 1001
USER nextapp

# Copy built artifacts from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./.next/public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
