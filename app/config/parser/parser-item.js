'use strict';
require('source-map-support').install();

/**
 * JSON 데이터 기반으로 보정하기 위한 파싱 클래스
 * @class
 */
export class ParserCorrectItem {
  constructor() {}

  /** @member {string} keyword */
  set keyword(keyword) {
    this._keyword = keyword;
  }
  get keyword() {
    return this._keyword;
  }

  /** @member {string} convert */
  set convert(convert) {
    this._convert = convert;
  }
  get convert() {
    return this._convert;
  }

  /** @member {string} type */
  set type(type) {
    this._type = type;
  }
  get type() {
    return this._type;
  }

  /** @member {string} comment */
  set comment(comment) {
    this._comment = comment;
  }
  get comment() {
    return this._comment;
  }

  toString() {
    return 'ParserItem class';
  }
}

/**
 * JSON 데이터 기반으로 데이터 생성을 위한 파싱 클래스
 * @class
 */
export class ParserItem {
  constructor() {}

  /** @member {string} keyword */
  set keyword(keyword) {
    this._keyword = keyword;
  }
  get keyword() {
    return this._keyword;
  }

  /** @member {string} convert */
  set convert(convert) {
    this._convert = convert;
  }
  get convert() {
    return this._convert;
  }

  /** @member {string} type */
  set type(type) {
    this._type = type;
  }
  get type() {
    return this._type;
  }

  /** @member {string} comment */
  set comment(comment) {
    this._comment = comment;
  }
  get comment() {
    return this._comment;
  }

  toString() {
    return 'ParserItem class';
  }
}
