'use strict';
require('source-map-support').install();

import {
  Routes
} from './routes';
import {
  ExpressPreviousWork
} from './express-previous-work';

import express from 'express';
import http from 'http';

const PORT = 8080;

try {
  let app = express();

  // express request 들어올 때 사전작업을 수행하는 기능을 추가한다.
  new ExpressPreviousWork(app);

  // rest 경로에 대해 설정하는 기능을 추가한다.
  new Routes(app);

  // 서버 실행
  http.createServer(app).listen(PORT, function () {
    console.log(`server start. port: ${PORT}`);
  });
} catch (e) {
  console.log(e);
}
