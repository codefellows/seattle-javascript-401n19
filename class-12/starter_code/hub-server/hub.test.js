'use strict';

const { logIt } = require('./hub.js');

describe('', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on next method

  beforeEach(() => {
    // Attach to the console (take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Put the console back
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    logIt(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

});
