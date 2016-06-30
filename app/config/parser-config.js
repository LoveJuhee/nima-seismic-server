'use strict';
require('source-map-support').install();

import {
  /* test-code */
  DEBUG_PARSE_CONFIG,
  /* end-test-code */
  LOGGING_PARSE_CONFIG,
} from './debug-flag';
let debug = require('debug')(LOGGING_PARSE_CONFIG);
import factory from './parser/parser-item-factory';

const TIME_KR_JSON = 'data/parser/time.kr.json';

/* test-code */
if (DEBUG_PARSE_CONFIG) {
  console.log(`TIME_KR_JSON: ${TIME_KR_JSON}`);
}
/* end-test-code */
debug(`TIME_KR_JSON: ${TIME_KR_JSON}`);

/**
 * 파싱처리를 위한 설정파일 로드 클래스
 * @class
 */
class ParserConfig {
  constructor() {
    // 시간 처리 JSON 로드
    this._time = factory.load(TIME_KR_JSON);
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
    return 'ParserConfig class';
  }
}

const instance = new ParserConfig();
export default instance;
