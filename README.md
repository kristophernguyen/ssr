# TypeScript + Hapi = <3

This is a super simple starter kit to develop APIs with HapiJS + TypeScript

## What currently supports? 

This starter kit comes with the following features: 

- **Swagger-UI** 
- **Status Monitor**
- **.env files support**
- **nodemon for hot-reload**
- **Pretty Console Logger with Winston** 
- **Work with Yarn or NPM 6 as dependency resolvers**
- **Code formatting with Prettier as hook for Pre-commit**
- **Dockerfile + docker-compose for development**
- **Basic Test Suite with Tape**
- **Coverage Report**
- **Supports Heroku Deployment**

## Requirements

* NodeJS 10.x
* Yarn 1.x

## How to use it? 

1. Download this project as a zip.
2. Run `yarn install`
3. Run `npm run nodemon:start`
4. Visit [http://localhost:8080/documentation](http://localhost:8080/documentation) to view swagger docs.
5. Visit [http://localhost:8080/api/users](http://localhost:8080/api/component/{name}) to test the REST API.

OUTDATED: Now there's a CLI that currently support creating a new project from this repo: [create-typescript-api](https://github.com/BlackBoxVision/create-typescript-api)


## TODO

## Documentation

### What are the package.json scripts for?

* `build-ts`: Compiles typescript based on config set in tsconfig.json.
* `start`: Starts node with the compiled typescript. Used by eg. Heroku.
* `docker:logs`: View Docker logs
* `docker:ps`: List Docker containers
* `docker:start`: Start Docker container based on docker-compose.yml file.
* `docker:stop`: Stop Docker container
* `nodemon:build`: Starts the Nodemon using ts-node. No need to compile beforehand.
* `nodemon:start`: Same as nodemon:build
* `format:lint`: Runs tslint on the typescipt files, based on tslint.js settings.
* `format:prettier`: Runs prettier on all ts-files.
* `postinstall`: Runs build-ts script. This is used by eg. Heroku automatically.
* `test`: Runs tests using nyc, and creates coverage report.