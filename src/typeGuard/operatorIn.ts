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