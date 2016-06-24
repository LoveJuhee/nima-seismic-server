'use strict';
import {
  DEBUG_SEISMIC
} from '../config/debug';
import {
  DEFAULT_SEISMIC_URL
} from '../config/config';

// import * as request from 'request';
// import {
//   Iconv as Iconv1
// } from 'iconv';
// import * as cheerio from 'cheerio';

let request = require('request');
let Iconv1 = require('iconv').Iconv;
let cheerio = require('cheerio');
const queryString = require('query-string');

/** SeismicProvider Class */
export class SeismicProvider {
  constructor(url = DEFAULT_SEISMIC_URL) {
    this._url = url;
  }

  /** KMA SEISMIC REQUEST URL */
  get url() {
    return this._url;
  }

  find(option = {}) {
    let url = this.url;
    let query = queryString.stringify(option) || '';
    if (query.length > 0) {
      url = url + '?' + query;
    }

    if (DEBUG_SEISMIC) {
      console.log(`url:${url}`);
      console.log(`query:${query}`);
    }
    //detailed info
    request({
      uri: url,
      encoding: 'binary'
    }, function (error, response, body) {
      if (error) {
        throw error;
      }

      let context = new Buffer(body, 'binary');
      let iconv = new Iconv1('EUC-KR', 'UTF8');
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

        if (DEBUG_SEISMIC) {
          console.log(`${time}, ${mag}, ${lat}, ${lon}, ${area}, ${vel}, ${acc}`);
        }
        console.log(seismic);
      });
    });

  }

  toString() {
    return 'SeismicProvider class';
  }
}
ass ';
}
}
