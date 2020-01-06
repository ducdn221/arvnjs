export const environment = {
  production: true,
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
  googleAPIKey: 'YOUR_GOOGLE_API_KEY',
  defaultLang: 'en',
  firebaseConfig: {
    apiKey: 'AIzaSyCq9y-_TlsclEoGDkR8ZP7KhJ6k2-_hiXU',
    authDomain: 'agushop-62027.firebaseapp.com',
    databaseURL: 'https://agushop-62027.firebaseio.com',
    projectId: 'agushop-62027',
    storageBucket: 'agushop-62027.appspot.com',
    messagingSenderId: '991533864745',
    appId: '1:991533864745:web:d838a6642406bbfc1f8938',
    measurementId: 'G-M2P5VN3QDV'
  }
};
