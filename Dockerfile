FROM docker.io/library/nginx:stable-alpine3.17-slim
COPY build /usr/share/nginx/html
