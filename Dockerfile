#base Image
#stage 1

FROM mhart/alpine-node

#define working directory
#stage 2
WORKDIR /urs/app

#copy package .json 
COPY package*.json ./

#donwload dependencies
RUN npm install

#copies the rest of the app
COPY . . 

#exposes the port 3000 outside the container
EXPOSE 3000

CMD npm start

