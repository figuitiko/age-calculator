import {useState} from 'react'
import DateItem from './DateItem'

const DateWrapper = () => {
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)
  return (
    <div className='flex flex-col items-center p-0 w-[782px] h-[342px]'>
      <DateItem dateLabel='' dateValue='years' />
      <DateItem dateLabel='' dateValue='month' />
      <DateItem dateLabel='' dateValue='days' />
    </div>
  )
}

export default DateWrapper