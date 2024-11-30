const compactNumberFormatter = new Intl.NumberFormat('en-IN', {
  notation: 'compact',
});

export function formatCompactNumber(number: number) {
  return compactNumberFormatter.format(number);
}
