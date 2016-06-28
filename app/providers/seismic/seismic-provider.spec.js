'use strict';

import {
  SeismicProvider
} from './seismic-provider';
import {
  SeismicOption
} from '../../models/seismic/seismic-option';

let option;
let seismic;
let seismicList;

describe('지진조회 처리 모듈', function () {
  beforeEach(function (done) {
    option = new SeismicOption();
    option.StartTm = '2016-04-01';
    option.EndTm = '2016-04-31';

    seismic = new SeismicProvider();
    seismic.find(option)
      .then(r => {
        seismicList = r;
        done();
      }, e => {
        console.log(`seismic.find() error`);
        console.log(e);
        done();
      });
  });

  it('seismicList is valid', function () {
    expect(seismicList).not.toBeUndefined();
    expect(seismicList).not.toBeNull();
  });

  it('seismicList has list', function () {
    expect(seismicList.length).toBeGreaterThan(0);
    expect(seismicList.length).toBeLessThan(100);
  });
});
