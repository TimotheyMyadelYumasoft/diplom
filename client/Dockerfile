FROM node:18.15.0

# set work directory
WORKDIR /app/frontend

# add to $PATH
ENV PATH /app/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app/frontend
COPY package-lock.json /app/frontend
RUN npm install --force

# add app
COPY . /app/frontend
