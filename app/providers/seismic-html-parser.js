'use strict';

/* test-code */
import {
  DEBUG_SEISMIC
} from '../config/debug';
/* end-test-code */

const Iconv = require('iconv').Iconv;
const cheerio = require('cheerio');
const util = require('util');

/**
 * 지진 HTML 데이터 파싱 클래스
 * @class
 */
export class SeismicHtmlParser {
  constructor() {}

  /**
   * 기상청 지진자료 파싱
   * @param {binary} body 기상청 조회 결과 HTML body binary
   * @return {array} 지진자료 목록
   */
  parseKma(body) {
    let seismicList = [];
    if (body) {
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

        // TODO: 기상청 다운로드 URL 처리.
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
          // console.log(`${time}, ${mag}, ${lat}, ${lon}, ${area}, ${vel}, ${acc}`);
          console.log(seismic);
        }
        /* end-test-code */

        seismicList.push(seismic);
      });
    }

    /* test-code */
    console.log(`지진 자료 개수: ${seismicList.length}`);
    /* end-test-code */

    return seismicList;
  }

  toString() {
    return 'SeismicHtmlParser class';
  }
}
