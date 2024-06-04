# use official node base image
FROM node:22-alpine

# set work directory
WORKDIR /app

# copy package and package-lock json file
COPY package*.json .

# install dependencies
RUN npm install

# copy app code
COPY . .

RUN npm run build

# expose port for vite
EXPOSE 8080

# start npm prod server
CMD [ "npm", "run", "preview" ]
