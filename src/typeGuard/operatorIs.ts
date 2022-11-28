function isNotNil<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined;
}

function demonstrateNotNil(value?: number | null) {
  if (isNotNil(value)) console.log(value.toFixed(2))
}