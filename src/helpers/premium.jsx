export const renderPremium = item => {
  if (
    item.rentalCompany.includes('Luxury') ||
    item.rentalCompany.includes('Elite') ||
    item.rentalCompany.includes('Premium') ||
    item.rentalCompany.includes('Exquisite') ||
    item.rentalCompany.includes('Supreme') ||
    item.rentalCompany.includes('Supercar') ||
    item.rentalPrice > 100
  ) {
    return <p>Premium</p>;
  }
};
