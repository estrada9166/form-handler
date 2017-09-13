'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '10px' } }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2 }, _react2.default.createElement(_reactBootstrap.Jumbotron, { style: { borderRadius: '15px' } }, _react2.default.createElement('h1', { style: { textAlign: 'center' } }, 'Form Handler')))));
};

exports.default = Header;