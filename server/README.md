# Spotlight-nodejs-ts-base
Base TypeScript project for all Spotlight NodeJS projects. This project contains a boilerplate to construct any backend project with minimal external dependencies and a basic folder strucuture.

## Project's architecture
The project tries to achieve an hexagonal architecture with the structure described below.
```
src
 ┣ modules        - Main parts
 ┃ ┣ adapters     - Interfaces for Data Sources
 ┃ ┣ controllers  - Logic behind routes
 ┃ ┗ routes       - API ULRs that map to controllers
 ┣ types          - TypeScript
 ┗ index.ts       - Main file
 ```
## Used libraries
- [Fastify](https://fastify.io): A fast and low overhead web framework. An alternative to ExpressJS.
- [Mocha](https://mochajs.org): A feature-rich testing framework.
- [Chai](https://www.chaijs.com): BDD / TDD assertion library (for Mocha, in this case).
- [TypeScript](https://www.typescriptlang.org): Add static typing to JS.
- [ESLint](https://eslint.org): Identify and report patterns (with airbnb plugin settings).
- [Nodemon](https://github.com/remy/nodemon): Add hot reloading capability.
- [Dockerfile](https://www.docker.com): Containerization with base settings.
- [dotenv](https://github.com/motdotla/dotenv): Loading environment variables from an `.env` file.


## Install dependencies
```
npm install
```

## Start the project
We can start the project in development mode (with hot reload) or in normal mode
``` javascript
npm run dev // with hot reload
npm start // without hot reload
```
## Build the project
This is a TS project, for this reason the project doesn't work in a NodeJS environment. We need to build (transpile) the project to JS before we are able to launch the project in a normal JS environment. To do this run:
``` javascript
npm run build
```

## Execute linters
To run the configured linter in `./tslint.json`
``` javascript
npm run lint
```
## Run the tests
All the tests in this project are made with Mocha/Chai. To execute the tests:
``` javascript
npm run test
```

## Run the project in a NodeJS env (builded)
If we want to run the project in a normal NodeJS environment we need to build it first:
``` javascript
npm run build
```

Then we can run the JS project with this command:
``` javascript
npm run start:production
```
