# Stage 1 - we build frontend
# Using alpine node 18 version - smaller in size than full node image, 
# put alias 'frontend-builder'
FROM node:18-alpine AS frontend-builder
# Set working directory inside container to /app/frontend
WORKDIR /app/frontend
# Copy everything from out folder into container's
COPY frontend/my-app/ ./
# Install dependencies and run react build using Vite.
RUN npm install && npm run build

# Stage 2 - we build backend now, using again node alpine version 18
FROM node:18-alpine AS backend-builder
# Set working directory to /app/backend inside container
WORKDIR /app/backend
# First copy contentsof package files (dependencies)
COPY backend/package*.json ./
# Install production dependencies only (those inside 'dependencies', not 'devDependencies')
RUN npm install --only=production
# Copy rest of the files from our folder into the container
COPY backend/ ./

# Stage 3 - final image 
# We have to use node image here also, not nginx image, 
# since nginx does not have node to execute backend - requires 'node' command
FROM node:18-alpine

# Install nginx inside node image
RUN apk add --no-cache nginx

# Copy frontend build files for nginx to serve - inside /dist (static ones)
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html

# Copy backend files
COPY --from=backend-builder /app/backend /app/backend

# Create required folder for nginx runtime
RUN mkdir -p /run/nginx

# Expose port 80 for nginx
EXPOSE 80

# Start backend (node) in background, start nginx in foreground
CMD node /app/backend/server.js & nginx -g 'daemon off;'