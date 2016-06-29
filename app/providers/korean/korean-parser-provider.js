'use strict';
require('source-map-support').install();

import instance from '../../config/parse-config';
import util from '../util';
/* test-code */
import {
  DEBUG_KOREAN_PARSER_PROVIDER
} from '../../config/debug-flag';
/* end-test-code */

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
      if (!message) {
        reject(new Error('message is null or undefined.'));
      }
      let result = {
        low: message,
        text: message.split(' '),
      };
      resolve(result);
    });
  }

  /**
   * 단어 중 시간데이터를 추출하여 기간 설정
   * @param {Object} obj 작업 데이터
   * @return {Object} 변환데이터
   */
  convertTime(obj) {
    return new Promise(function (resolve, reject) {
      if (!obj) {
        reject(new Error('obj is null or undefined.'));
      }
      let time = instance.time;
      resolve(obj);
    });
  }

  /**
   * 텍스트를 변환
   * @param {Object} obj 처리를 위한 객체
   * @return {Promice} 처리를 위한 Promise 객체
   */
  convertText(obj) {
    return new Promise(function (resolve, reject) {
      if (!obj) {
        reject(new Error('obj is null or undefined.'));
      }
      resolve(obj);
    });
  }

  /**
   * 한글 분석
   * @param {string} message 한글 메시지
   * @return {KoreanParserResult} 분석결과 객체
   */
  parse(message) {
    let queryTime = this.queryTime;
    let queryText = this.queryText;
    return this.split(message)
      .then(queryTime)
      .then(queryText);
  }

  toString() {
    return 'KoreanParserProvider class';
  }
}
