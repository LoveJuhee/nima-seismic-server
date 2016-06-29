'use strict';
require('source-map-support').install();

import instance from '../../config/parser-config';
import {
  SearchQuery
} from '../queries/search-query';
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
export class KoreanParserrProvider {
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
        split: message.split(' '),
        items: [],
        query: new SearchQuery(),
      };
      resolve(result);
    });
  }

  /**
   * 단어 중 보정이 필요한 작업을 수행
   * @param {Object} obj 작업 데이터
   * @return {Object} 변환데이터
   */
  parsePrev(obj) {
    return new Promise(function (resolve, reject) {
      if (!obj) {
        reject(new Error('obj is null or undefined.'));
      }
      resolve(obj);
    });
  }

  /**
   * 단어 중 시간데이터를 추출하여 기간 설정
   * @param {Object} obj 작업 데이터
   * @return {Object} 변환데이터
   */
  parseTime(obj) {
    return new Promise(function (resolve, reject) {
      if (!obj) {
        reject(new Error('obj is null or undefined.'));
      }
      let time = instance.time;
      /* test-code */
      if (DEBUG_KOREAN_PARSER_PROVIDER) {
        console.log(`time.length: ${time.length}`);
      }
      /* end-test-code */

      let items = obj.items;
      let split = obj.split;
      for (var i = 0; i < split.length; i++) {
        const target = split[i];
        for (var j = 0; j < time.length; j++) {
          if (target.indexOf(time[j].keyword) === 0) {
            /* test-code */
            if (DEBUG_KOREAN_PARSER_PROVIDER) {
              console.log(`find it! ${target} ==> ${time[j].keyword}`);
            }
            /* end-test-code */
            items.push(time[j]);
          }
        }
      }

      resolve(obj);
    });
  }

  /**
   * 텍스트를 변환
   * @param {Object} obj 처리를 위한 객체
   * @return {Promice} 처리를 위한 Promise 객체
   */
  parseText(obj) {
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
   * @return {KoreanParserrResult} 분석결과 객체
   */
  parse(message) {
    let parsePrev = this.parsePrev;
    let parseTime = this.parseTime;
    let parseText = this.parseText;
    return this.split(message)
      .then(parsePrev)
      .then(parseTime)
      .then(parseText);
  }

  toString() {
    return 'KoreanParserrProvider class';
  }
}
