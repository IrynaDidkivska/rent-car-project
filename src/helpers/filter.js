export const filterItems = (
  items,
  valueBrand,
  valuePrice,
  valueFrom,
  valueTo
) => {
  return items.filter(
    item =>
      (!valueBrand || item.make === valueBrand) &&
      (!valuePrice ||
        Number(item.rentalPrice.replace('$', '')) <= valuePrice) &&
      (!valueFrom || item.mileage >= valueFrom) &&
      (!valueTo || item.mileage <= valueTo)
  );
};
