function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleConfirmationModal } from '../../actions/confirmation';

var Confirmation = function (_Component) {
  _inherits(Confirmation, _Component);

  function Confirmation() {
    var _temp, _this, _ret;

    _classCallCheck(this, Confirmation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleConfirm = function () {
      return _this.props.confirmationModal.confirm().then(_this.props.toggle);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Confirmation.prototype.render = function render() {
    var _props = this.props,
        toggle = _props.toggle,
        confirmationModal = _props.confirmationModal;
    var isOpen = confirmationModal.isOpen,
        text = confirmationModal.text,
        question = confirmationModal.question,
        _confirmationModal$co = confirmationModal.color,
        color = _confirmationModal$co === undefined ? 'danger' : _confirmationModal$co,
        _confirmationModal$co2 = confirmationModal.confirmText,
        confirmText = _confirmationModal$co2 === undefined ? 'Yes' : _confirmationModal$co2,
        _confirmationModal$ca = confirmationModal.cancelText,
        cancelText = _confirmationModal$ca === undefined ? 'Cancel' : _confirmationModal$ca,
        _confirmationModal$ti = confirmationModal.title,
        title = _confirmationModal$ti === undefined ? 'Confirmation' : _confirmationModal$ti,
        hint = confirmationModal.hint;


    var ModalComponent = this.props.modalComponent;

    return React.createElement(ModalComponent, {
      isOpen: isOpen,
      toggle: toggle,
      confirm: this.handleConfirm,
      contentData: {
        title: title,
        question: question,
        text: text,
        hint: hint,
        confirmText: confirmText,
        color: color,
        cancelText: cancelText
      }
    });
  };

  return Confirmation;
}(Component);

Confirmation.propTypes = process.env.NODE_ENV !== "production" ? {
  toggle: PropTypes.func.isRequired,
  modalComponent: PropTypes.func.isRequired,
  confirmationModal: PropTypes.object.isRequired
} : {};

var mapStateToProps = function mapStateToProps(_ref) {
  var confirmationModal = _ref.confirmationModal;
  return { confirmationModal: confirmationModal };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggle: function toggle() {
      return dispatch(toggleConfirmationModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);