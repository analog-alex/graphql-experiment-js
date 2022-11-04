# GraphQL-js experiment

A small experiment with GraphQL, with a Node backend and a React frontend.

## How to boot up locally



Install dependencies via `npm i` then run `docker-compose up -d mongo` to have a locally available MongoDB instance running
on port 27017. Then run the migrations via `npx prisma migrate dev`. 

Finally, run `npm run develop` to boot up the app in hot reload mode. 

## TODO

- Make the React front end actually work.
- Make the DB an actual DB (probs MongoDB) 
