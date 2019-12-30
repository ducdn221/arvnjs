// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    baseUrl: 'http://localhost:9999/api/v1',
  },
  auth : {
    authUrl: 'http://localhost:9999/api/v1'
  },
  auth0: {
    clientID: 'chiH7Q66ooB3U39QxoegLMznNxaO9eRj',
    domain: 'monkeytgoden.auth0.com',
    audience: 'http://localhost:9999',
    redirectUri: 'http://localhost:4200/login/callback',
    scope: 'openid profile email'
  },
  googleAPIKey: 'YOUR_GOOGLE_API_KEY', // example AIzaSyBNg_O4VHVbCB9tUs4w5wX90yuvWyOpAA4
  defaultLang: 'vi'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
