const assert = require('assert');
const binCheck = require('bin-check');
const hugoBin = require('../lib');

describe('hugo-bin', () => {
  it('should return path to binary and work', () => {
    return binCheck(hugoBin, ['version']).then(works => {
      assert(works);
    });
  });
});