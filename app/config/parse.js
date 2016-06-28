'use strict';
/* test-code */
import {
  DEBUG_PARSE_CONFIG
} from './debug';
/* end-test-code */
import {
  util
} from '../providers/util';

const TIME_KR_JSON = 'data/time.kr.json';

/* test-code */
if (DEBUG_PARSE_CONFIG) {
  console.log(`TIME_KR_JSON: ${TIME_KR_JSON}`);
}
/* end-test-code */

/**
 * 파싱처리를 위한 설정파일 로드 클래스
 * @class
 */
class ParseConfig {
  constructor() {
    this._time = util.toJsonSync(TIME_KR_JSON);
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
    return 'ParseConfig class';
  }
}

export const instance = new ParseConfig();
