# frontend/Dockerfile

# Build step
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production step
FROM nginx:alpine

# Copy build output to nginx's default folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy default nginx config (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
