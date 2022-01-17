from node:16-alpine

WORKDIR /app

COPY build .


RUN npm i serve -g
EXPOSE 3000

CMD ["serve","-s","build","-l","3000"]