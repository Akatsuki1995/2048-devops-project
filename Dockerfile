FROM node:16-alpine

WORKDIR /usr/src/app

# CHANGED: Look in src/ for package files
COPY src/package*.json ./
RUN npm install

# CHANGED: Copy contents of src/ into the container
COPY src/ .

EXPOSE 3000
CMD [ "node", "server.js" ]
