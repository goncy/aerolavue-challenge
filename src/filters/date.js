export default function formatDate(value) {
  if (value) {
    const date = new Date(value)
    return `${date.getMonth() +
      1}/${date.getDate()}/${date.getFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`
  }
}
