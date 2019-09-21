/* eslint-disable default-case */
import BN from 'bn.js';

function sortValidators(validators) {
  const result = validators.sort((a, b) => {
    const first = new BN(a.totalBonded);
    const second = new BN(b.totalBonded);
    return first.sub(second);
  });

  return result.reverse();
}

function convertToFloat(value) {
  const result = new BN(value);
  const divisor = new BN('1000000000000');
  return result.div(divisor).toString();
}

function humanize(number) {
  if (number % 100 >= 11 && number % 100 <= 13) return `${number}th`;

  switch (number % 10) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
  }

  return `${number}th`;
}

function formatAddress(address) {
  const firstFive = address.substring(0, 5);
  const lastFive = address.substring(address.length - 5);
  return `${firstFive}...${lastFive}`;
}

export { sortValidators, convertToFloat, humanize, formatAddress };
