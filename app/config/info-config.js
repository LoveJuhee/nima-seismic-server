'use strict';
require('source-map-support').install();

/* test-code */
import {
  DEBUG_PARSE_CONFIG,
  LOGGING_PARSE_CONFIG,
} from './debug-flag';
/* end-test-code */
let debug = require('debug')(LOGGING_PARSE_CONFIG);
import factory from './parser/parser-item-factory';

const SERVER_JSON = 'data/info/server.json';

/* test-code */
if (DEBUG_PARSE_CONFIG) {
  console.log(`SERVER_JSON: ${SERVER_JSON}`);
}
/* end-test-code */
debug(`SERVER_JSON: ${SERVER_JSON}`);

/**
 * 파싱처리를 위한 설정파일 로드 클래스
 * @class
 */
class InfoConfig {
  constructor() {
    // 시간 처리 JSON 로드
    this._time = factory.load(SERVER_JSON);
  }

  /**
   * time 시간관련 파싱 객체 반환 함수
   * @param {string} fileName JSON 파일경로
   * @return {array} time 시간관련 파싱 객체
   */
  get time() {
    return this._time;
  }

  toString() {
    return 'InfoConfig class';
  }
}

const instance = new InfoConfig();
export default instance;
