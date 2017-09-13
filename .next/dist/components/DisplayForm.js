'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayForm = function (_Component) {
  (0, _inherits3.default)(DisplayForm, _Component);

  function DisplayForm() {
    (0, _classCallCheck3.default)(this, DisplayForm);

    return (0, _possibleConstructorReturn3.default)(this, (DisplayForm.__proto__ || (0, _getPrototypeOf2.default)(DisplayForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(DisplayForm, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', null, _react2.default.createElement(_reactBootstrap.Row, null, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2 }, _react2.default.createElement('pre', null, (0, _stringify2.default)(state, null, 2)))));
    }
  }]);

  return DisplayForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(DisplayForm);