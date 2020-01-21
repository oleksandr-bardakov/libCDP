import * as React from 'react';
import CreatableSelect from 'react-select';
import './multi-value-suggestbox.css';
import 'rc-inputs/styles/tag-input.css';

const createOption = (label) => {
  const trimedLabel = label.trim();
  return {
    label: trimedLabel.length ? trimedLabel : '',
    value: trimedLabel.length ? trimedLabel : '',
  };
};

class MultiSuggestBox extends React.Component {
  constructor(props) {
    super(props);
    const { options } = this.props;
    this.state = {
      inputValue: '',
      value: [],
      options,
    };
  }

  componentDidUpdate(prevProps) {
    const { options } = this.props;
    if (prevProps.options !== options) {
      this.setState({
        options,
      });
    }
  }

  handleChange = (value) => {
    const { onAdd, suggesValue, handleChangeSuggestBox } = this.props;
    if (suggesValue) {
      handleChangeSuggestBox && handleChangeSuggestBox(value);
      onAdd(value);
    } else {
      this.setState({
        value,
      }, () => onAdd && onAdd(value));
    }
  };

  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  handleKeyDown = (event) => {
    const { onAdd, blockAddNewItem } = this.props;
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    const newValue = createOption(inputValue);
    const lastPosition = event.target.value.length;
    const isNotAlredyExistEntity = !value.find(item => item.label.length && item.label.toLowerCase() === newValue.label.toLowerCase());
    switch (event.key) {
      case 'Home':
        event.target.setSelectionRange(0, 0);
        break;
      case 'End':
        event.target.setSelectionRange(lastPosition, lastPosition);
        break;
      case 'Enter':
      case 'Tab':
      case ',':
        if (isNotAlredyExistEntity && !blockAddNewItem) {
          const newValues = newValue.label.length ? [...value, newValue] : value;
          if (onAdd) onAdd(newValues);
          this.setState({
            inputValue: '',
            value: newValues,
          });
          event.preventDefault();
        }
        break;
      default:
        break;
    }
  };

  render() {
    const { inputValue, value, options } = this.state;
    const {
      label, isRequired, isMulti, placeholder, suggesValue, isDisabled, onBlur, autoFocus,
      className,
    } = this.props;
    return (
      <div className={`multi-value-suggestbox__container ${className ? className : ''}`}>
        {label
          ? <div className='multi-value-suggestbox__label'>
            <span>{label}</span>
            {
              isRequired && <span className='multi-select_is-required'> *</span>
            }
          </div>
          : null}
        <CreatableSelect
          classNamePrefix='multi-value-suggestbox'
          inputValue={inputValue}
          isClearable
          isMulti={isMulti}
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          options={options}
          placeholder={placeholder}
          value={suggesValue || value}
          isDisabled={isDisabled}
          onBlur={onBlur}
          autoFocus={autoFocus}
        />
      </div>
    );
  }
}

export default MultiSuggestBox;
