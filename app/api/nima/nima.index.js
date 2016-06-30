'use strict';
require('source-map-support').install();

import {
  NimaController,
  NIMA_ROUTE_URI,
} from './nima.controller';

/**
 * 컨트롤러 연결 클래스
 * @class
 */
export class NimaIndex {
  constructor(app) {
    this.link(app, NIMA_ROUTE_URI, new NimaController());
  }

  link(app, uri, controller) {
    app.get(uri + '/', controller.index);
    app.get(uri + '/:quest', controller.show);
    app.post(uri + '/', controller.create);
    app.put(uri + '/:id', controller.update);
    app.patch(uri + '/:id', controller.update);
    app.delete(uri + '/:id', controller.destroy);
  }

  toString() {
    return 'Linker class';
  }
}
