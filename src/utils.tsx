export const formatNumber = (number: number): string =>
  `#${String(number).padStart(3, '0')}`;
