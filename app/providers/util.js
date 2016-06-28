'use strict';
/**
 * 유틸리티 라이브러리 클래스
 * @class
 */
export class Util {
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
}
