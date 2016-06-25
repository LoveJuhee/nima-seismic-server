'use strict';

/**
 * 라우트 처리 클래스
 * @class
 */
export class Routes {
  /**
   * 생성자
   * @param {Express} app Express 객체
   */
  constructor(app) {
    if (app) {
      app.use('/api/v1/seismic', require('./api/v1/seismic'));
    }
  }

  toString() {
    return 'Routes class';
  }
}
