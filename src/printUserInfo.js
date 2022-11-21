const printUserInfo = (user) => {
  console.log(user.name)
  console.log(user.lastName)
  console.log(user.age)
  console.log(user.jobTitle ?? 'Безработный')
}

printUserInfo({
  name: 'John',
  lastName: 'Rock',
  age: 42,
  jobTitle: 'Programmer',
})

printUserInfo({
  name: 'John',
  lastName: 'Rock',
})