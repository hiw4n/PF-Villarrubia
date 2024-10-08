# ANGULAR PROJECT

(---)

# EXPLORESAPP
## DEV

1. Clone the project.
2. run ```npm install```.
3. up backend ```npm run backend```.
4. run app ```npm start```or ```ng server -o```.

(---)

### TEST: spec.ts
```
/src/app/app.component.spec.ts

/src/app/features/auth/login/login.component.spec.ts
```

### BACKEND

DATA Base JSON (students and Courses)
```
/app/core/data/xxxx.json
```


Data Base For JSON-SERVER is at: "/data/bd.json"
```
 Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile
  http://localhost:3000/slider
  http://localhost:3000/products
  http://localhost:3000/enrollments
  http://localhost:3000/users
  http://localhost:3000/courses
  http://localhost:3000/courses-space
  http://localhost:3000/students
  http://localhost:3000/teachers

  Home
  http://localhost:3000
  
```


## Complements:

```
npm install
```


### Angular Material: 
* [link](https://material.angular.io/guide/getting-started)
```
  ng add @angular/material
```
* [icon Reference](https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/)
  
### Boodstrap: 
* [link](https://getbootstrap.com/)
```
  npm i bootstrap@5.3.3
```
```
  // package.json
  "options": {
    "styles": [
    ...
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
    ...
    ],
    "scripts": [
    ...
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ...
    ]
  }
```
### Primeflex: 
* [link](https://primeflex.org/)
```
  npm i primeflex
```
```
  // package.json
  "options": {
    "styles": [
    ...
    "node_modules/primeflex/primeflex.css",
    ...
    ]
  }
```
### fontAwesome: 
* [link](https://github.com/FortAwesome/angular-fontawesome),
* [npm](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)
```
  npm install @fortawesome/angular-fontawesome@18.x
```
### json to interface:
* transform.tools: [link](https://transform.tools/json-to-typescript)

### json server:
* [link](https://www.npmjs.com/package/json-server)
```
  npm install json-server
```
```
  // package.json
   "scripts": {
    ...
    "backend":"npx json-server db.json",
    ...
   }
```
  npm run backend
  // Index:
  // http://localhost:3000/
  //
  // Static files:
  // Serving ./public directory if it exists

  // Endpoints:
  // http://localhost:3000/usersOld
  // http://localhost:3000/users
  // http://localhost:3000/coursesOld
  // http://localhost:3000/courses
  // http://localhost:3000/students
  // http://localhost:3000/teachers

```
### ngrx:
* [link install](https://ngrx.io/guide/effects/install)
* [Extension Chrome](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
```
  ng add @ngrx/store@latest // app.module.ts add: StoreModule.forRoot(rootReducer, {}),
  ng add @ngrx/store-devtools@latest // app.module.ts add: StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
```


### Software:
* VisualStudio code.
* Figma.
* Photoshop.

* Angular 18.
* Node.
* Js.
* Html.
* Scss / Sass.

### Bibliografía / IA:
* JSon creados por: 
 * chatGpt: [link](https://chatgpt.com/)
* Imágenes creadas por: 
 * Adobe firefly: [link](https://firefly.adobe.com/ ) 
 * Freepick: [link](https://www.freepik.es/ai/imagenes) 
 * OpenArt: [link](https://openart.ai/create) 
* Tutoriales de referencia:
  * Dev.to: 
    * How to create a responsive sidebar and mini navigation with Material Angular [link](https://dev.to/davidihl/how-to-create-a-responsive-sidebar-and-mini-navigation-with-material-angular-o5l)
  * medium.com:
    * @bosarreyesrodrigo:
      * Creación de Pruebas Unitarias con Jasmine y Karma en Angular [Link](https://medium.com/@bosarreyesrodrigo/creaci%C3%B3n-de-pruebas-unitarias-con-jasmine-y-karma-en-angular-d720de52deea)
  * Patricio Soriano Castro:
    * Crear una Fake REST API con JSON-Server [link](https://sigdeletras.com/2020/crear-una-fake-reat-api-con-json-server-copy/)
  * Leifer Mendez:
    * [ngrx](https://www.youtube.com/playlist?list=PL_WGMLcL4jzVkzMox4UxGcsBLvFurCDax)
  * Try to fix reducer/ngrx - NOT FIX :( :
    * [Link post](https://timdeschryver.dev/blog/common-and-easy-to-make-mistakes-when-youre-new-to-ngrx#the-reducer)








# PFVillarrubiaMoreno

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
