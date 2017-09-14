'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _constants.INPUT_VALUE:
      return (0, _extends3.default)({}, state, (0, _defineProperty3.default)({}, action.title, (0, _extends3.default)({}, state[action.title], (0, _defineProperty3.default)({}, action.name, action.val))));
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2Zvcm1SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIklOUFVUX1ZBTFVFIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidGl0bGUiLCJuYW1lIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBVCxBQUVBOzs7O2tCQUFlLFlBQXlCO01BQXhCLEFBQXdCLDRFQUFoQixBQUFnQjtNQUFaLEFBQVksbUJBQ3RDOztVQUFRLE9BQU8sQUFBZixBQUNFO0FBQUssQUFBTCxBQUNFO3dDQUFZLEFBQVoseUNBQ0csT0FBTyxBQURWLGtDQUVTLE1BQU0sT0FBTyxBQUFiLEFBRlQsMENBR08sT0FBTyxBQUhkLE1BR3FCLE9BQU8sQUFINUIsQUFNRjtBQUNFO2FBQU8sQUFBUCxBQVRKLEFBV0Q7O0FBWkQiLCJmaWxlIjoiZm9ybVJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsZWphbmRyb2VzdHJhZGEvRG9jdW1lbnRzL0NvZGUvbmV4dC5qcy9leGFtcGxlcy9oYW5kbGUtZm9ybSJ9