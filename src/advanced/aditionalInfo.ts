{
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

  const anonim: AnonimPerson = {
    id: 'id',
    name: 'John',
    age: 42,
    gender: 'Male',
    children: []
  }

  const person: Person = {
    id: 'id',
    name: 'John',
    age: 42,
    gender: 'Male',
    children: []
  }
}