'use strict';
/* test-code */
import {
  DEBUG_SEISMIC
} from '../../config/debug';
/* end-test-code */
import {
  DEFAULT_SEISMIC_URL
} from '../../config/config';

const request = require('request');
const Iconv = require('iconv').Iconv;
const cheerio = require('cheerio');
const queryString = require('query-string');

/** SeismicV1 Class */
export class SeismicV1 {
  constructor(url = DEFAULT_SEISMIC_URL) {
    this._url = url;
  }

  /**
   * 지진조회 URL 정보
   * @return {string} url 기상청 지진 조회 URL
   */
  get url() {
    return this._url;
  }

  /**
   * 지진목록 조회
   * @param {SeismicOption} option 지진조회조건
   * @return {Object} 지진목록
   */
  find(option = {}) {
    let url = this.url;
    let query = queryString.stringify(option) || '';
    if (query.length > 0) {
      url = url + '?' + query;
    }

    /* test-code */
    if (DEBUG_SEISMIC) {
      console.log(`url:${url}`);
      console.log(`query:${query}`);
    }
    /* end-test-code */

    //detailed info
    request({
      uri: url,
      encoding: 'binary'
    }, function (error, response, body) {
      if (error) {
        throw error;
      }

      let context = new Buffer(body, 'binary');
      let iconv = new Iconv('EUC-KR', 'UTF8');
      context = iconv.convert(context).toString();

      let $ = cheerio.load(context, {
        decodeEntities: false
      });
      // console.log($.html());

      $('.table_develop tbody tr').each(function () {
        function htmlToString(item) {
          if (item) {
            return item.html().replace(/(\r\n|\n|\r)/gm, "").trim();
          }
          return '';
        }

        let time = htmlToString($(this).find("td").eq(0));
        let mag = htmlToString($(this).find("td").eq(1));
        let lat = htmlToString($(this).find("td").eq(2)).replace(" N", "");
        let lon = htmlToString($(this).find("td").eq(3)).replace(" E", "");
        let area = htmlToString($(this).find("td").eq(4));
        let vel = '';
        let acc = '';

        let seismic = {
          time,
          mag,
          lat,
          lon,
          area,
          vel,
          acc
        };

        // $(this, '.align_left').each(function () {
        //   vel = htmlToString($(this).find("a").eq(0));
        //   acc = htmlToString($(this).find("a").eq(1));
        // });

        /* test-code */
        if (DEBUG_SEISMIC) {
          console.log(`${time}, ${mag}, ${lat}, ${lon}, ${area}, ${vel}, ${acc}`);
        }
        /* end-test-code */

        /* test-code */
        console.log(seismic);
        /* end-test-code */
      });
    });

  }

  toString() {
    return 'SeismicV1 class';
  }
}
