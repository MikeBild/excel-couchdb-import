/* global describe, it */
'use strict';

const expect = require('chai').expect;
const parse = require('../lib/parse');

describe('parse', () => {
  it('parses *.xlsx to JSON', () => {
    const fixturesPath = __dirname + '/fixtures';
    const output = require(fixturesPath + '/parse-output.json');

    return parse({path: fixturesPath + '/parse-input.xlsx'})
      .then(docs => {
        delete docs.importedAt;
        delete output.importedAt;
        expect(JSON.stringify(docs, null, 2)).to.equal(JSON.stringify(output, null, 2));
      });
  });
});
