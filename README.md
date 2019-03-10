# TypeScript + Hapi + Vision

1. Download this project as a zip.
2. Run `npm install`
3. Run `npm run nodemon:start`
4. Visit [http://localhost:8080/documentation](http://localhost:8080/documentation) to view swagger docs.
5. Visit [http://localhost:8080/api/users](http://localhost:8080/api/component/{name}) to test the REST API.

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