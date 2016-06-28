'use strict';

import {
  Util
} from '../util';
/* test-code */
import {
  DEBUG_KOREAN_PARSER_PROVIDER
} from '../../config/debug';
/* end-test-code */

let util = new Util();

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
      resolve(items);
      // this.split(items)
      //   .then(resolve)
      //   .catch(reject);
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
    let split = this.split(message);
    let query = this.query;
    return split
      /* test-code */
      .then(util.print)
      /* end-test-code */
      .then(query);

    // return new Promise(function (resolve, reject) {
    //   this.split(message)
    //     .then(this.query)
    //     /* test-code */
    //     .then(util.print)
    //     /* end-test-code */
    //     .then(resolve)
    //     .catch(reject);
    // });
  }

  toString() {
    return 'KoreanParserProvider class';
  }
}
