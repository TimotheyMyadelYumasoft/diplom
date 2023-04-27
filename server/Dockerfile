FROM node:18.15.0

WORKDIR /app/backend

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 7000

CMD [ "npm" , "run" , "dev" ]