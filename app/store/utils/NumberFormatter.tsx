export const numberFormatter = (number: number): string => {
  if (number < 1000) {
    return number.toString();
  } else if (number < 1000000) {
    const divided = number / 1000;
    return divided % 1 === 0 ? `${divided}K` : `${divided.toFixed(1)}K`;
  } else {
    const divided = number / 1000000;
    return divided % 1 === 0 ? `${divided}M` : `${divided.toFixed(1)}M`;
  }
};
