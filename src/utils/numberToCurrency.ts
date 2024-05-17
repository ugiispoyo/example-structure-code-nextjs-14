/**
 * @name numberToCurrency
 * @param {number} num
 * @param {boolean} [withCommaEnd=false] withCommaEnd
 * @param {string} [locales=en-IN] locales
 * @param {string} [currency=USD] currency
 * @returns {string}
 */
function numberToCurrency(
  num: number,
  withCommaEnd: boolean = false,
  locales: string = "en-IN",
  currency: string = "USD"
): string {
  const convertToCurrency = new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
  })
    .format(num)
    .toString();

  if (withCommaEnd) {
    return convertToCurrency;
  }

  return convertToCurrency.slice(0, convertToCurrency.length - 3);
}

export default numberToCurrency;
