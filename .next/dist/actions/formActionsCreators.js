'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputChange = undefined;

var _constants = require('../constants');

var inputChange = exports.inputChange = function inputChange(title, name, val) {
  return function (dispatch) {
    return dispatch({ type: _constants.INPUT_VALUE, title: title, name: name, val: val });
  };
};