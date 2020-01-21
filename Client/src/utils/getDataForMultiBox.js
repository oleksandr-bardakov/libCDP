export const getDataForMultiBox = (arr, anotherIndetificator) => {
  const employeesForMultiBox = arr.reduce((acc, item) => {
    acc.push({
      label: item.name || item[anotherIndetificator],
      value: item.name || item[anotherIndetificator],
      valueId: item.id || item.name,
    });
    return acc;
  }, []);
  return employeesForMultiBox;
};
