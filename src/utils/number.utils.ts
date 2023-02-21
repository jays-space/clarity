const convertNumberToLocaleCurrency = (number: number) => {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(number);
};

const numberUtils = {
  convertNumberToLocaleCurrency,
};

export default numberUtils;
