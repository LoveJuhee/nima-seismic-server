'use strict';
require('source-map-support').install();

let bodyParser = require('body-parser');

/**
 * express 구동 전 사전 작업 클래스
 * @class
 */
export class ExpressPreviousWork {
  /**
   * 생성자
   * @param {express.app} app Express 객체
   */
  constructor(app) {
    if (!app) {
      throw (new Error('app is null or undefined.'));
    }

    app.use(bodyParser.urlencoded({
      extended: true
    }));

  }

  toString() {
    return 'ExpressPreviousWork class';
  }
}
