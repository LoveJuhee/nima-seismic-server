'use strict';

import {
  KoreanParserProvider
} from './korean-parser-provider';

import {
  SEISMIC_QUERY_LIST,
  SEISMIC_TEXT_LIST,
  TYPHOON_TEXT_LIST,
} from '../../config/debug-flag';

import util from '../util';

let provider = new KoreanParserProvider();

describe('한글 변환 테스트', function () {
  beforeEach(function () {});

  it('지진 쿼리 생성 테스트', function (done) {
    let promiseList = [];
    for (var i = 0; i < SEISMIC_QUERY_LIST.length; i++) {
      let p = provider.parse(SEISMIC_QUERY_LIST[i]);
      promiseList.push(p);
    }

    Promise.all(promiseList)
      .then(util.print) // 결과 출력
      .catch(util.print) // error 출력
      .then(done);
  });

  xit('태풍 단어 분리 테스트', function (done) {
    let requests = TYPHOON_TEXT_LIST.reduce((chain, item) => {
      return chain.then(() => new Promise((resolve) => {
        provider.split(item)
          .then(r => {
            return util.print(r);
          })
          .then(resolve);
      }));
    }, Promise.resolve());
    requests.then(() => done());
  });

  xit('지진 단어 분리 테스트', function (done) {
    let requests = SEISMIC_TEXT_LIST.reduce((chain, item) => {
      return chain.then(() => new Promise((resolve) => {
        provider.split(item)
          .then(util.print)
          .then(resolve);
      }));
    }, Promise.resolve());
    requests.then(() => done());
  });

  xit('한글 파싱 처리 테스트', function () {});
});
