export default function formatDate(value) {
  if (value) {
    const getNumber = number => (number < 10 ? `0${number}` : String(number))
    const date = new Date(value)

    return `${getNumber(date.getMonth() + 1)}/${getNumber(
      date.getDate()
    )}/${getNumber(date.getFullYear())} ${getNumber(
      date.getUTCHours()
    )}:${getNumber(date.getUTCMinutes())}`
  }
}
