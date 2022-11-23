{
  enum Status {
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    SUCCESS = "SUCCESS",
  }

  const printStatus = (status: Status) => {
    switch (status) {
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

  printStatus(Status.PENDING)
  printStatus(Status.SUCCESS)
  printStatus(Status.REJECTED)
}