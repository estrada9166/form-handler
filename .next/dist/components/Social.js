'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Input = require('../handlers/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Social = function Social() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { lg: 8 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Facebook', title: 'social', name: 'facebook' })), _react2.default.createElement(_reactBootstrap.Col, { lg: 8 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Instagram', title: 'social', name: 'instagram' })), _react2.default.createElement(_reactBootstrap.Col, { lg: 8 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Twitter', title: 'social', name: 'twitter' })), _react2.default.createElement(_reactBootstrap.Col, { lg: 8 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Github', title: 'social', name: 'github' }))));
};

exports.default = Social;