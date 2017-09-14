'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _redux = require('redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/next.js/examples/handle-form/handlers/Input.js';


var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this.inputChange = function (title, name, e) {
      _this.props.inputChange(title, name, e.target.value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_reactBootstrap.FormGroup, { controlId: 'formBasicText', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_reactBootstrap.ControlLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.controlLabel), _react2.default.createElement(_reactBootstrap.FormControl, {
        disabled: this.props.disabled,
        type: this.props.type || 'Text',
        placeholder: this.props.controlLabel,
        onChange: function onChange(e) {
          return _this2.inputChange(_this2.props.title, _this2.props.name, e);
        },
        value: this.props.val,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })));
    }
  }]);

  return Input;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_actions.inputChange, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Input);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZXJzL0lucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29sIiwiUm93IiwiRm9ybUdyb3VwIiwiQ29udHJvbExhYmVsIiwiRm9ybUNvbnRyb2wiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5wdXRDaGFuZ2UiLCJJbnB1dCIsInRpdGxlIiwibmFtZSIsImUiLCJwcm9wcyIsInRhcmdldCIsInZhbHVlIiwiY29udHJvbExhYmVsIiwiZGlzYWJsZWQiLCJ0eXBlIiwidmFsIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFLLEFBQUssQUFBVyxBQUFjOztBQUM1QyxBQUFTOztBQUNULEFBQVM7O0FBRVQsQUFBUzs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7OzBNLEFBQ0osY0FBYyxVQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVIsQUFBYyxHQUFNLEFBQ2hDO1lBQUEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixPQUF2QixBQUE4QixNQUFNLEVBQUEsQUFBRSxPQUF0QyxBQUE2QyxBQUM5QztBOzs7Ozs2QkFFUTttQkFDUDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLDJDQUFVLFdBQVgsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUFlO0FBQWY7QUFBQSxjQUFlLEFBQUssTUFEdEIsQUFDRSxBQUEwQixBQUMxQiwrQkFBQSxBQUFDO2tCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjtjQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFGbkIsQUFFMkIsQUFDekI7cUJBQWEsS0FBQSxBQUFLLE1BSHBCLEFBRzBCLEFBQ3hCO2tCQUFVLGtCQUFBLEFBQUMsR0FBRDtpQkFBTyxPQUFBLEFBQUssWUFBWSxPQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FBTyxPQUFBLEFBQUssTUFBeEMsQUFBOEMsTUFBckQsQUFBTyxBQUFvRDtBQUp2RSxBQUtFO2VBQU8sS0FBQSxBQUFLLE1BTGQsQUFLb0I7O29CQUxwQjtzQkFKTixBQUNFLEFBQ0UsQUFFRSxBQVVQO0FBVk87QUFDRTs7Ozs7QUFYUSxBOztBQXdCcEIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQVksQUFDckM7O2lCQUNlLEFBQW1CLHFEQURsQyxBQUFPLEFBQ1EsQUFBZ0MsQUFFaEQ7QUFIUSxBQUNMO0FBRkosQUFNQTs7a0JBQWUseUJBQUEsQUFBUSxNQUFSLEFBQWMsb0JBQTdCLEFBQWUsQUFBa0MiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZWphbmRyb2VzdHJhZGEvRG9jdW1lbnRzL0NvZGUvbmV4dC5qcy9leGFtcGxlcy9oYW5kbGUtZm9ybSJ9