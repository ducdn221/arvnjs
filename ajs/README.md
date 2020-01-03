## Ajs

### init Ajs
> npm install -g @angular/cli

> ng new ajs

> cd ajs

> ng serve

(http://localhost:4200/)

### Install Angular Material (https://material.angular.io/guide/getting-started)
> ng add @angular/material

"@angular/cdk": "~8.2.3",
"@angular/material": "^8.2.3",
"hammerjs": "^2.0.8"

### Parse, validate, manipulate, and display dates and times in JavaScript.
> npm install moment --save

### The internationalization (i18n) library for Angular. (https://github.com/ngx-translate/core)
###### app.module.ts -> TranslateModule.forRoot
> npm install @ngx-translate/core --save
> npm install @ngx-translate/http-loader --save

### Use gmap
> index.html -> <script src="https://maps.googleapis.com/maps/api/js?key={googleAPIKey}" type="text/javascript"></script>

### Package contains type definitions for Google Maps JavaScript API. (https://developers.google.com/maps/)
###### tsconfig.app.json -> "types": ["googlemaps"]
> npm install --save @types/googlemaps

### JWT
###### check expire date
> npm install --save @auth0/angular-jwt
###### read JWT payload to get roles & permissions
> npm install --save jwt-decode

### The official library for Firebase and Angular
###### https://github.com/angular/angularfire/blob/HEAD/docs/install-and-setup.md
> npm install firebase @angular/fire --save

### bootstrap
> npm i bootstrap
###### ng-bootstrap -> This repository contains a set of native Angular directives based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required.
> npm install --save @ng-bootstrap/ng-bootstrap

### Deployment with firebase
> npm i -g firebase-tools
> npm i firebase --save

### Angular2 custom validation, inspired by jQuery validation.
> npm i ng2-validation
