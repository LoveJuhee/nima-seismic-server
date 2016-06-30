'use strict';
require('source-map-support').install();

import {
  NimaController,
  NIMA_ROUTE_URI,
} from './api/nima/nima.controller';

import {
  SeismicController,
  SEISMIC_ROUTE_URI,
} from './api/seismic/seismic.controller';

/**
 * 컨트롤러 연결 클래스
 * @class
 */
class Linker {
  constructor() {}

  link(app, uri, controller) {
    app.get(uri, controller.index);
    app.get(uri + ':id', controller.show);
    app.post(uri, controller.create);
    app.put(uri + ':id', controller.update);
    app.patch(uri + ':id', controller.update);
    app.delete(uri + ':id', controller.destroy);
  }

  toString() {
    return 'Linker class';
  }
}
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
    if (!app) {
      throw (new Error('app is null or undefined.'));
    }
    let linker = new Linker();
    linker.link(app, NIMA_ROUTE_URI, new NimaController());
    linker.link(app, SEISMIC_ROUTE_URI, new SeismicController());
  }

  toString() {
    return 'Routes class';
  }
}
