'use strict';
require('source-map-support').install();

/* test-code */
import {
  DEBUG_PARSE_CONFIG,
} from '../debug-flag';
/* end-test-code */
import {
  LOGGING_PARSE_CONFIG,
} from '../config';
import {
  ParseItem,
  ParseCorrectItem,
} from './parse-item';
import util from '../../providers/util';

let debug = require('debug')(LOGGING_PARSE_CONFIG);

/**
 * JSON 데이터를 읽어서 keywords 2차원 배열을 1차원 배열로 생성하는 객체
 * @class
 */
export class ParseItemFactory {
  /**
   * 파일을 읽어서 ParseItem array로 반환
   * @param {string} fileName JSON 파일 경로
   * @return {Array<ParseItem>} 변환된 ParseItem 배열
   */
  load(fileName) {
    if (!fileName) {
      throw new Error('ParseItemFactory.load: fileName is null or undefined.');
    }

    /* test-code */
    if (DEBUG_PARSE_CONFIG) {
      console.log(`ParseItemFactory.load: fileName is '${fileName}'.`);
    }
    /* end-test-code */
    debug(`ParseItemFactory.load: fileName is '${fileName}'.`);

    let itemList = [];
    // 시간 처리 JSON 로드
    let items = util.toJsonSync(fileName);
    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      if (!item.keywords) {
        continue;
      }
      for (var j = 0; j < item.keywords.length; j++) {
        let keyword = item.keywords[j];
        let p = new ParseItem();
        p.keyword = keyword;
        p.convert = item.convert;
        p.type = item.type;
        p.comment = item.comment;
        itemList.push(p);
      }
    }
    itemList.sort(util.compareParseKeyword);

    /* test-code */
    if (DEBUG_PARSE_CONFIG) {
      console.log(itemList);
    }
    /* end-test-code */
    debug(itemList);

    return itemList;
  }

  /**
   * 파일을 읽어서 ParseCorrectItem array로 반환
   * @param {string} fileName JSON 파일 경로
   * @return {Array<ParseCorrectItem>} 변환된 ParseCorrectItem 배열
   */
  loadCorrect(fileName) {
    if (!fileName) {
      throw new Error('ParseItemFactory.loadCorrect: fileName is null or undefined.');
    }

    /* test-code */
    if (DEBUG_PARSE_CONFIG) {
      console.log(`ParseItemFactory.loadCorrect: fileName is '${fileName}'.`);
    }
    /* end-test-code */
    debug(`ParseItemFactory.loadCorrect: fileName is '${fileName}'.`);

    // TODO: 객체관련 생성로직을 구현해야한다.

    let correctList = [];
    // 시간 처리 JSON 로드
    let items = util.toJsonSync(fileName);
    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      if (!item.keywords) {
        continue;
      }
      for (var j = 0; j < item.keywords.length; j++) {
        let keyword = item.keywords[j];
        let p = new ParseCorrectItem();
        p.keyword = keyword;
        p.convert = item.convert;
        p.type = item.type;
        p.comment = item.comment;
        correctList.push(p);
      }
    }
    correctList.sort(util.compareParseKeyword);

    /* test-code */
    if (DEBUG_PARSE_CONFIG) {
      console.log(correctList);
    }
    /* end-test-code */
    debug(correctList);

    return correctList;
  }

  toString() {
    return 'ParseItemFactory class';
  }
}

const factory = new ParseItemFactory();
export default factory;
