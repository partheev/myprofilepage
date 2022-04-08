from node:16-alpine

WORKDIR /app

ADD build ./build


RUN npm i serve -g
EXPOSE 3000

CMD ["serve","-s","build","-l","3000"]