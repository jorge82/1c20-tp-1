FROM node:8.10

WORKDIR /js

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies


RUN npm install


# Bundle app source
COPY . .

# PORT NUMBER
EXPOSE 8080

CMD [ "node", "index.js" ]
