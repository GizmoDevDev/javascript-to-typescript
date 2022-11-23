# Базовая работа с ts

## Часто встречающиеся типы
- **any** - представляет собой любой тип данных. Это значит, что мы можем присвоить такой переменной любое значение и обращаться к любым полям и методам у нее
- **number** - численный тип данных
- **string** - строковый тип данных
- **boolean** - логический тип данных
- **undefined** - переменная не определена
- **null** - переменной задано значение null
- **void** - специальный тип, показывающий, что функция ничего не возвращает

## Примеры кода
Пример работы с примитивами
```typescript
  const str = 'hello'; // эквивалентно const str: string = 'hello'
  const num = 100; // эквивалентно const num: number = 100
  const isTrue = true; // эквивалентно const isTrue: boolean = true
```

Пример описания типа объектов
```typescript
type User = {
  name: string;
  lastName: string;
  jobTitle?: string; // jobTitle может принимать значение типа string или undefined
}

const user1: User = {
  name: 'user 1',
  lastName: 'user 1',
}

const user2: User = {
  name: 'user 2',
  lastName: 'user 2',
  jobTitle: 'Programmer'
}
```

Пример описания функции
```typescript
  type Func1 = (name: string, lastName: string) => string
  const func1: Func1 = (name, lastName) => {
    return name + lastName
  }
  
  const func2 = (name: string, lastName: string) => {
    return name + lastName
  }

  const func3 = (name: string, lastName: string, jobTitle?: string) => {
    return name + lastName + jobTitle
  }
```

Пример описания массивов
```typescript
  const array = [1, 2, 3, 4] // эквивалентно const array: number[] = [1, 2, 3, 4]
```

Пример работы с компонентами
```typescript
    type DisplayItemProps = {
      title: string;
      price: number;
    }
    
    const DisplayItem = ({title, price}: DisplayItemProps) => {
      return (
        <>
          <div>{title}</div>
          <div>{price}</div>
        </>
      )
    }
    
    type DisplayMenuProps = {
      items: DisplayItemProps[]
    }
    
    export const DisplayMenu = ({items}: DisplayMenuProps) => {
      return (
        <>
          {items.map(({title, price}) => <DisplayItem title={title} price={price} />)}
        </>
      )
    }
```