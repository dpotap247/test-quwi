export function parseServerError(errorData) {
  if (errorData) {
    const firstErrors = errorData.first_errors
    let text = ''

    for (const key in firstErrors) {
      text += `\n${firstErrors[key]}`
    }

    return text
  }
}
