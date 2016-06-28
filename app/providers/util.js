'use strict';

const fs = require('fs');

/**
 * 유틸리티 라이브러리 클래스
 * @class
 */
class Util {
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

}

export const util = new Util();
