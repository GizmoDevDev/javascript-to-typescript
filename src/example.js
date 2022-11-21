const message = "Hello World!"
message.toLowerCase()
message()

const user = {
  name: 'John',
  age: 30
}
user.location

const announcement = 'Hello World!'
console.log(announcement.toLocaleLowercase())

function flipCoin() {
  return Math.random < 0.5
}

const value = Math.random() < 0.5 ? 'a' : 'b'
if (value !== 'a') {
  doSomething()
} else if (value === 'b') {
  doSomethingElse()
}