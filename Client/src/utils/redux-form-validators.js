import isEmptyObject from 'utils/isEmptyObject';

export const required = (value, values, props, field, message = 'Value required') => {
  if (!isEmptyObject(props.data)) {
    let isRequired;
    switch (typeof value) {
      case 'number':
        if (field === 'Budget' && value === 0) {
          isRequired = true;
        } else {
          isRequired = !!value;
        }
        break;
      case 'string':
        isRequired = !!value.trim();
        break;
      case 'object':
        isRequired = !isEmptyObject(value) && !!value;
        break;
      default:
        isRequired = !!value;
        break;
    }
    return isRequired ? false : message;
  }
};
