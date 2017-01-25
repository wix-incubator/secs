import {expect} from 'chai';
import secs from '../src';

describe('secs', () => {

  it('should return number of seconds', () => {
    expect(secs('2 days')).to.equal(2 * 24 * 60 * 60);
  });

});
