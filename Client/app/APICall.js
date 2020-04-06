// /* eslint-disable */
// import axios from 'axios';
// import * as urlConfig from './urlConfig';

// const instance = axios.create({
//   // baseURL: appConfig.BASE_URL,
//   // timeout: appConfig.API_TIMEOUT,
// });



// instance.interceptors.request.use(
//   async config => {
//     // const refreshToken = localStorage.getItem('refreshToken');
//     const token = localStorage.getItem('token');

//     if (config.url.startsWith('/admin')) {
//       config.url = `${urlConfig.BASE_URL}${config.url}`;
//     }

//     if (config.url.startsWith(urlConfig.BASE_URL)) {
//       if (!token) {
//         window.location = '/login';
//       }
//       config.headers['x-access-token'] = token;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );

// instance.interceptors.response.use(
//   response => response,
//   async error => {
//     const errorResponse = error.response;
//     if (errorResponse.status == 401) {
//       const token = await getToken();
//       localStorage.setItem('token', token);
//       return Promise.resolve(instance(errorResponse.config));
//     }
//     return Promise.reject(error);
//   },
// );

// export default instance;
