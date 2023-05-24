import DateItem from './DateItem'
import { useFormStore } from '../store/store'
import { calculateAge } from '../util'

const DateWrapper = () => {
  const day = useFormStore((state) => state.day)
  const month = useFormStore((state) => state.month)
  const year = useFormStore((state) => state.year)
  const dateString = `${year}-${month}, ${day}`
  const { years, months, days } = calculateAge(dateString)
  return (
    <div className='flex flex-col items-center p-0 w-[295px] md:w-[782px] h-[186px] md:h-[342px]'>
      <DateItem dateLabel={years !== 0 ? years : ''} dateValue='years' />
      <DateItem dateLabel= {months !== 0 ? months : ''} dateValue='month' />
      <DateItem dateLabel= {days !== 0 ? days : ''} dateValue='days' />
    </div>
  )
}

export default DateWrapper
