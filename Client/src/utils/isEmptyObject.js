const isEmptyObject = (object) => {
  return object ? !Object.keys(object).length : false;
};

export default isEmptyObject;
