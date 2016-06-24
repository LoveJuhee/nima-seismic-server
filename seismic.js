let request = require('request');
let Iconv1 = require('iconv').Iconv;
let cheerio = require('cheerio');

let url = 'http://www.kma.go.kr/weather/earthquake_volcano/domesticlist.jsp?startTm=2016-01-01&endTm=2016-06-24&startSize=999&endSize=999&startLat=&endLat=&startLon=&endLon=&lat=&lon=&dist=&keyword=&x=25&y=11';

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

    let seismic = {
      time,
      mag,
      lat,
      lon,
      area
    };

    let vel = '';
    let acc = '';

    // $(this, '.align_left').each(function () {
    //   vel = htmlToString($(this).find("a").eq(0));
    //   acc = htmlToString($(this).find("a").eq(1));
    // });

    console.log(`${time}, ${mag}, ${lat}, ${lon}, ${area}, ${vel}, ${acc}`);
  });
});
