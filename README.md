# NestJS + Angular Boilerplate

> This is a Beta boilerplate and we'd appreciate any help you offer.

**A brief background**: Some time ago I was trying to join NestJS and Angular.
In the process I looked for some examples and didn't succeed. Therefore I
decided to make this boilerplate for whoever this could be useful.

## Overview

This boilerplate pretends to join two of the best JS Frameworks: NestJS in the
back-end and Angular in the front-end. All of this in the same repository
and without the need of having two different `package.json` files in two
different source folders.

This boilerplate delivers some useful scripts to run the project.

## Development server

Run `npm run start:dev` for running a dev server. It will run Angular at
`localhost:4200` and NestJS at `localhost:3000/api`. Taking advantage of
Angular's proxy, requests made to `/api/*` from the front-end will target
`localhost:3000/api` which avoids the use of CORS headers in the back-end.

This script will run `nodemon` and `ng serve` at the same time which will
automatically reload the app in the back-end when changes occurred in `api/` and
in the front-end when changes occur in the `src/` folder.

## Code scaffolding

### Front end

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Back end

Run `ng generate controller controller-name` to generate a new controller.
You can also use
`ng generate module`.

## Build

Run `npm run build` to build the project. The build artifacts from the front-end
will be stores in `dist/public` and the back-end artifacts will be stored in
`dist`. The result is a production build which may be executed in a production
server.

## Running unit tests

Run `npm run test:client` to execute the unit tests on the front-end via
[Karma](https://karma-runner.github.io).

Run `npm run test:server` to execute the unit tests on the back-end via
[Jest](https://todo.com).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help on the NestJS CLI use `nest help`.
