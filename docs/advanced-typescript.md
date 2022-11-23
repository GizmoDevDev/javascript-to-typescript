# Продвинутая работа с typescript

## Расширение существующего типа
Расширение существующего типа, как следует из названия, позволяет добавить к существующему типу новые поля
```typescript
type Human = {
  name: string;
  age: number;
  gender: string;
}

type Worker = Human & {
  jobTitle: string;
}

const human: Human = {
  name: 'John',
  age: 42,
  gender: 'Male'
}

const worker: Worker = {
  name: 'John',
  age: 42,
  gender: 'Male',
  jobTitle: 'Programmer',
}
```

## Объединение типов
Объединение типов позволяет использовать один из доступных типов. Используемый тип определится в момент исполнения кода.
```typescript
function print(value: string | number) {
  console.log(value)
}

print("Hello, world!")
print(42)
```

## Generic
Дженерики - это типы, которые могут быть одним из доступных при определении типов. 
Тип, который будет использоваться, определяется в месте использования.
```typescript
type Human = {
  name: string;
  age: number;
  gender: string;
}

function addIdField<Type>(value: Type): Type & {id: number} {
  return {
    ...value,
    id: Math.random()
  }
}

const human: Human = {
  name: 'John',
  age: 42,
  gender: 'Male'
}

const humanWithId = addIdField(human);
```

## Enum

```typescript
enum Status {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  SUCCESS = "SUCCESS",
}

const printStatus = (status: Status) => {
  switch(status) {
    case Status.SUCCESS:
      console.log('Готово')
      break
    case Status.PENDING:
      console.log('Ожидайте')
      break
    case Status.REJECTED:
      console.log('Отклонено')
      break
  }
}
```

# Record, Pick, Omit
```typescript
const map: Record<string, string> = {}
map.status = 'success'
console.log(map.location)

type Human = {
  id: string;
  name: string;
  age: number;
  gender: string;
  children: Human[]
}

type AnonimPerson = Pick<Human, 'age' | 'gender'>

type Person = Omit<Human, 'id' | 'children'>
```