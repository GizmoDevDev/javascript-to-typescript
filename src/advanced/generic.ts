{
  type Human = {
    name: string;
    age: number;
    gender: string;
  }

  const human: Human = {
    name: 'John',
    age: 42,
    gender: 'Male'
  }

  function addIdField<Type>(value: Type): Type & { id: number } {
    return {
      ...value,
      id: Math.random()
    }
  }

  const humanWithId = addIdField(human);
  console.log(humanWithId)
}