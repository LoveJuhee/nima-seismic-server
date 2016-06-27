'use strict';

import {
  DEFAULT_SEISMIC_URL
} from '../config/config';
import {
  SeismicHtmlParser
} from './seismic-html-parser';

const requestPromise = require('request-promise');
const queryString = require('query-string');
const util = require('util');

/** SeismicProvider Class */
export class SeismicProvider {
  constructor(url = DEFAULT_SEISMIC_URL) {
    this._url = url;
  }

  /** @member {string} url 지진조회 URL 정보 */
  get url() {
    return this._url || '';
  }

  /** @member {SeismicHtmlParser} parser 파싱 객체 */
  get parser() {
    if (util.isNullOrUndefined(this._parser)) {
      this._parser = new SeismicHtmlParser();
    }
    return this._parser;
  }

  /**
   * 지진목록 조회
   * @param {SeismicOption} option 지진조회조건
   * @return {array} 지진목록
   */
  find(option = {}) {
    let url = this.url;
    let query = queryString.stringify(option) || '';
    if (query.length > 0) {
      url = url + '?' + query;
    }
    let parser = this.parser;

    return new Promise(function (resolve, reject) {
      /* test-code */
      console.log(`url:${url}`);
      console.log(`query:${query}`);
      /* end-test-code */

      let requestOption = {
        uri: url,
        encoding: 'binary'
      };

      // 지진데이터 조회
      requestPromise(requestOption)
        .then(parser.parseKma)
        .then(resolve)
        .catch(reject);
    });
  }

  toString() {
    return 'SeismicProvider class';
  }
}
