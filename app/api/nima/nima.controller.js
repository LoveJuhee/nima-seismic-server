'use strict';
require('source-map-support').install();

/* test-code */
import {
  IS_DEBUG_ROUTE_NIMA,
} from '../../config/debug-flag';
/* end-test-code */
import {
  LOGGING_ROUTE_NIMA,
} from '../../config/config';
let debug = require('debug')(LOGGING_ROUTE_NIMA);

export const NIMA_ROUTE_URI = '/api/nimas/';

/**
 * rest nima 에 대한 처리 클래스
 * @class
 */
export class NimaController {
  constructor() {
    debug(`NimaController create`);
  }

  /**
   * get 대응 로직
   * @param {request} req 리퀘스트 요청 정보 객체
   * @param {result} res 요청 처리 결과 반환 객체
   * @return {void} void
   */
  index(req, res) {
    debug(`index`);
    res.send('index');
  }

  /**
   * get:id 대응 로직
   * @param {request} req 리퀘스트 요청 정보 객체
   * @param {result} res 요청 처리 결과 반환 객체
   * @return {void} void
   */
  show(req, res) {
    debug('show');
    res.send('show');
  }

  /**
   * post 대응 로직
   * @param {request} req 리퀘스트 요청 정보 객체
   * @param {result} res 요청 처리 결과 반환 객체
   * @return {void} void
   */
  create(req, res) {
    debug('create');
    res.send('create');
  }

  /**
   * put, patch 대응 로직
   * @param {request} req 리퀘스트 요청 정보 객체
   * @param {result} res 요청 처리 결과 반환 객체
   * @return {void} void
   */
  update(req, res) {
    debug('update');
    res.send('update');
  }

  /**
   * delete 대응 로직
   * @param {request} req 리퀘스트 요청 정보 객체
   * @param {result} res 요청 처리 결과 반환 객체
   * @return {void} void
   */
  destroy(req, res) {
    debug('destroy');
    res.send('destroy');
  }

  toString() {
    return 'NimaController class';
  }
}
