# stge 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm audit fix
RUN npm run build --prod

# stage 2
FROM nginx:stable-alpine
COPY --from=node /app/dist/check-this-out /usr/share/nginx/html