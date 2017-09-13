'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _formReducer = require('./formReducer');

var _formReducer2 = _interopRequireDefault(_formReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  formReducer: _formReducer2.default
});