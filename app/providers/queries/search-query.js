'use strict';
require('source-map-support').install();

/**
 * 조회 쿼리
 * @class
 */
export class SearchQuery {
  constructor() {}

  toString() {
    return 'SearchQuery class';
  }

  /** @member {string} stime 시작시간 */
  set stime(stime) {
    this._stime = stime;
  }
  get stime() {
    return this._stime;
  }

  /** @member {string} etime 종료시간 */
  set etime(etime) {
    this._etime = etime;
  }
  get etime() {
    return this._etime;
  }

  /**
   * Object로 반환
   * @return {Object} 변환된 객체
   */
  toObject() {
    let obj = {};
    if (this.stime) {
      obj.stime = this.stime;
    }
    if (this.etime) {
      obj.etime = this.etime;
    }
    return obj;
  }
}
