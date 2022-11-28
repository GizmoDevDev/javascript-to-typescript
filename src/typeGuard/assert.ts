export function checkIsNotNil<TValue>(
  value: TValue | undefined | null,
): asserts value is TValue {
  if (value !== null && value !== undefined) throw new Error('Null or undefined');
}

function demonstrateNotNil(value?: number | null): number {
  checkIsNotNil(value)
  return value
}