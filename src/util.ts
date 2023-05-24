export const calculateAge = (birthDate: string): { years: number, months: number, days: number } => {
  const birthDay = new Date(birthDate)
  if (isNaN(birthDay.getTime())) {
    return { years: 0, months: 0, days: 0 }
  }
  const currentDate = new Date()

  let years = currentDate.getFullYear() - birthDay.getFullYear()
  let months = currentDate.getMonth() - birthDay.getMonth()
  let days = currentDate.getDate() - birthDay.getDate()

  // Check if the current day is before the birth day in the same month
  if (months < 0 || (months === 0 && days < 0)) {
    years--
    months += 12
  }

  // Adjust months if the current day is before the birth day
  if (days < 0) {
    months--
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate()
  }

  return { years, months, days }
}
