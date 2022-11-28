# Определение типов typescript

## Оператор typeof
Позволяет отличать только на уровне базовых типов
- **string**
- **number**
- **bigint**
- **boolean**
- **symbol**
- **undefined**
- **object**
- **function**
```typescript
function print(num: string | number) {
  if (typeof num === "string"){
    console.log(num)
  } else {
    console.log(num.toFixed(2))
  }
}
```
## Проверка на основе преобразования к логическому значению
Позволяет убедиться, что тип не `null` и не `undefined`.
Лучше не использовать с примитивами
Следующие значения преобразуются в false:
- 0
- NaN
- "" 
- 0n (BigInt)
- null
- undefined

Как видно можно потерять некоторые значения числа или строк
```typescript
function print(array?: number[]) {
  if (!array) {
    console.log('Передан undefined')
  } else {
    console.log(array)
  }
}
```
## Оператор in
Оператор, позволяющий понять есть ли поле в объекте
```typescript
type SuccessResponse = {
  data: any[];
}

type ErrorResponse = {
  errorMessage: string;
}

function printResponse(response: SuccessResponse | ErrorResponse) {
  if ('data' in response) {
    console.log(response.data)
  } else {
    console.log(response.errorMessage)
  }
}
```
## type predicate
Позволяет сделать функцию, которая проверит, что переменная относится к конкретному типу
```typescript
function isNotNil<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined;
}
```
## field check
Если имеется несколько схожих типов данных и не используются классы, то можно различать их создав для этого специальное поле
```typescript
type Circle = {
  type: 'circle',
  radius: number,
}

type Square = {
  type: 'square',
  side: number,
}

function getSquare(shape: Circle | Square): number {
  switch (shape.type) {
    case "circle":
      return 2 * Math.PI * shape.radius;
    case "square":
      return shape.side ** 2;
  }
}
```
## assert
В случае несоответствия типов бросает исключение.
```typescript
export function checkIsNotNil<TValue>(
  value: TValue | undefined | null,
  errorMessage: string,
): asserts value is TValue {
  if (value !== null && value !== undefined) throw new Error(errorMessage);
}
```