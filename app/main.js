'use strict';
require('source-map-support').install();

import {
  Routes
} from './routes';
import express from 'express';
import http from 'http';

let app = express();
let routes = new Routes(app);
/* test-code */
console.log(routes);
/* end-test-code */

const PORT = 8080;
http.createServer(app).listen(PORT, function () {
  console.log(`server start. port: ${PORT}`);
});

//
//
// import {
//   SeismicProvider
// } from './providers/seismic/seismic-provider';
// import {
//   SeismicOption
// } from './models/seismic/seismic-option';
//
// console.log(SeismicProvider);
//
// let option = new SeismicOption();
// option.StartTm = '2016-04-01';
// option.EndTm = '2016-04-31';
//
// console.log(option);
//
// let seismic = new SeismicProvider();
// seismic.find(option)
//   .then(r => {
//     let seismicList = r;
//     seismicList.forEach((seismic) => {
//       console.log(seismic);
//     });
//   }, e => {
//     console.log(`seismic.find() error`);
//     console.log(e);
//   });
//
