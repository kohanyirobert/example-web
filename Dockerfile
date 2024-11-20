FROM node:23-alpine
WORKDIR /app
COPY . .
RUN npm install
ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=7000
EXPOSE $VITE_PORT
CMD ["npm", "run", "dev"]
