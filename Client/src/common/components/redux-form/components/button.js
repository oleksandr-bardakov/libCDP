import React from 'react';

export default class Button extends React.Component {
  onClick = () => {
    const { onClick, disabled = false } = this.props;
    !disabled && onClick();
  }

  render() {
    const {
      className, text, visible = true, title,
    } = this.props;
    return (
      visible && <div className={className} onClick={this.onClick} title={title}>
        <span>{text}</span>
      </div>
    );
  }
}
