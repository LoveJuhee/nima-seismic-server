'use strict';

/**
 * 조회 쿼리
 * @class
 */
export class SearchQuery {
  constructor() {}

  toString() {
    return 'SearchQuery class';
  }

  /** @member {string} stime */
  set Stime(stime) {
    this.stime = stime;
  }
  get Stime() {
    return this.stime;
  }
}
