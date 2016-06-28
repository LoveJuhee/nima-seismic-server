'use strict';

import {
  instance
} from '../../config/parse';
import {
  util
} from '../util';
/* test-code */
import {
  DEBUG_KOREAN_PARSER_PROVIDER
} from '../../config/debug';
/* end-test-code */

const config = instance;

/**
 * 한글 파싱 모듈
 * @class
 */
export class KoreanParserProvider {
  constructor() {}

  /**
   * 한글 단어 분리
   * @param {string} message 한글 메시지
   * @return {Array} 분리된 단어
   */
  split(message) {
    return new Promise(function (resolve, reject) {
      /* test-code */
      if (DEBUG_KOREAN_PARSER_PROVIDER) {
        console.log(`KoreanParserProvider.split called.`);
      }
      /* end-test-code */
      if (!message) {
        reject(new Error('message is null or undefined.'));
      }
      resolve(message.split(' '));
    });
  }

  /**
   * 단어 중 시간데이터를 추출하여 기간 설정
   * @param {Object} obj 작업 데이터
   * @return {Object} 변환데이터
   */
  queryTime(obj) {
    return '';
  }

  /**
   * 한글기반 쿼리 생성
   * @param {array} items 한글 메시지 분리 데이터
   * @return {KoreanParserResult} 분석결과 객체
   */
  query(items) {
    return new Promise(function (resolve, reject) {
      /* test-code */
      if (DEBUG_KOREAN_PARSER_PROVIDER) {
        console.log(`KoreanParserProvider.query called.`);
      }
      /* end-test-code */
      if (!items) {
        reject(new Error('items is null or undefined.'));
      }
      let obj = {
        row: items,
        convert: [],
      };
      // this.queryTime(obj)
      //   .then(resolve);
      // resolve(items);
    });
  }

  /**
   * 한글 분석
   * @param {string} message 한글 메시지
   * @return {KoreanParserResult} 분석결과 객체
   */
  parse(message) {
    /* test-code */
    if (DEBUG_KOREAN_PARSER_PROVIDER) {
      console.log(`KoreanParserProvider.parse called.`);
    }
    /* end-test-code */
    return this.split(message)
      /* test-code */
      .then(util.print)
      /* end-test-code */
      .then(this.query);
  }

  toString() {
    return 'KoreanParserProvider class';
  }
}
