{
  type Human = {
    name: string;
    age: number;
    gender: string;
  }

  type WorkerPerson = Human & {
    jobTitle: string;
  }

  const human: Human = {
    name: 'John',
    age: 42,
    gender: 'Male'
  }

  const worker: WorkerPerson = {
    name: 'John',
    age: 42,
    gender: 'Male',
    jobTitle: 'Programmer',
  }
  console.log(human)
  console.log(worker)
}