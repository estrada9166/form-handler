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

var UserForm = function UserForm() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 4 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Name', title: 'user', name: 'name' })), _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 4 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Last name', title: 'user', name: 'lastName' })), _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 4 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Email', type: 'email', title: 'user', name: 'email' })), _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 4 }, _react2.default.createElement(_Input2.default, { controlLabel: 'Password', type: 'password', title: 'user', name: 'password' }))));
};

exports.default = UserForm;