'use strict';
require('source-map-support').install();

import instance from './parser-config';

import util from '../providers/util';

let parse = instance;

describe('ParserConfig TEST', function () {
  it('parse is valid', function () {
    expect(parse).not.toBeUndefined();
  });

  it('time is array list', function () {
    expect(parse.time).not.toBeUndefined();
    expect(parse.time.length).toBeGreaterThan(0);
    console.log(parse.item);
  });
});
