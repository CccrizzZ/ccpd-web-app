# use official node base image
FROM node:18-bookworm AS build

# set work directory
WORKDIR /app

# copy package and package-lock json file
COPY package*.json .

# install dependencies
RUN npm install

# copy app code
COPY . .

# build npm app
RUN npm run build
RUN npm prune --production

# expose port for vite
EXPOSE 8080

# start npm prod server
CMD [ "npm", "run", "preview" ]
