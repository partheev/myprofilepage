from node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
RUN npm i serve -g
EXPOSE 3000

CMD ["serve","-s","build","-l","3000"]