'use strict';
require('source-map-support').install();

const fs = require('fs');

/**
 * 유틸리티 라이브러리 클래스
 * @class
 */
class Util {
  constructor() {}

  /**
   * Promise then 사용을 위한 단순 출력 객체
   * @param {Object} item 출력할 객체
   * @return {Promise} Promise 객체
   */
  print(item) {
    return new Promise(function (resolve, reject) {
      if (!item) {
        reject(new Error('item is null or undefined'));
      }
      console.log(item);
      resolve(item);
    });
  }

  /**
   * 동기식으로 파일을 읽어서 JSON으로 반환
   * @param {string} file 파일 경로
   * @return {array} JSON 배열
   */
  toJsonSync(file) {
    try {
      let reads = fs.readFileSync(file, 'utf8');
      return JSON.parse(reads);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 파싱 아이템 키워드 기준 정렬 (글자길이, 글자 순으로 모두 역정렬)
   * @param {ParseItem} item1 비교대상1
   * @param {ParseItem} item2 비교대상2
   * @return {int} 비교결과
   */
  compareParseKeyword(item1, item2) {
    if (!item1 && !item2) {
      return 0;
    } else if (!item1 && item2) {
      return -1;
    } else if (item1 && !item2) {
      return 1;
    }
    // 글자 길이 역정렬
    let cal = item1.keyword.length - item2.keyword.length;
    if (cal > 0) {
      return -1;
    } else if (cal < 0) {
      return 1;
    }
    // 글자 역정렬
    if (item1.keyword > item2.keyword) {
      return -1;
    }
    if (item1.keyword < item2.keyword) {
      return 1;
    }
    return 0;
  }
}

const util = new Util();
export default util;
