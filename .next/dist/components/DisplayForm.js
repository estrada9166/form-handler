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

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/next.js/examples/handle-form/components/DisplayForm.js';


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

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('pre', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, (0, _stringify2.default)(state, null, 2)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGlzcGxheUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb2wiLCJSb3ciLCJjb25uZWN0IiwiRGlzcGxheUZvcm0iLCJzdGF0ZSIsInByb3BzIiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQUs7O0FBQ2QsQUFBUzs7Ozs7OztJQUVILEE7Ozs7Ozs7Ozs7OzZCQUNLO1VBQUEsQUFDQyxRQUFVLEtBRFgsQUFDZ0IsTUFEaEIsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMscUNBQUksSUFBTCxBQUFTLEdBQUcsVUFBWixBQUFzQjtvQkFBdEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGtDQUFNLEFBQWUsT0FBZixBQUFzQixNQUpwQyxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBQU0sQUFBNEIsQUFLM0M7Ozs7O0FBWnVCLEE7O0FBZTFCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9COztXQUFBLEFBQU8sQUFHUjtBQUhRLEFBQ0w7QUFGSixBQU1BOztrQkFBZSx5QkFBQSxBQUFRLGlCQUF2QixBQUFlLEFBQXlCIiwiZmlsZSI6IkRpc3BsYXlGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbGVqYW5kcm9lc3RyYWRhL0RvY3VtZW50cy9Db2RlL25leHQuanMvZXhhbXBsZXMvaGFuZGxlLWZvcm0ifQ==