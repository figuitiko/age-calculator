interface Props {
  dateValue: string
  dateLabel: string | number
}
const DateItem = ({ dateLabel, dateValue }: Props) => {
  console.log('DateItem.tsx', dateLabel)
  return (
    <div className='flex items-start gap-[8px] md:gap-10 w-[295px] md:w-[728px] h-[62px] md:h-[114px]  '>
      <span className='h-full w-[138px] flex items-center font-poppins italic font-extrabold text-[56px] md:text-[104px] text-[#854DFF]'>
        { dateLabel === '' ? '--' : dateLabel}
      </span>
      <h4 className='w-[301px] h-[114px] font-poppins font-extrabold text-[56px] md:text-[104px] italic leading-[110%] md:leading-[114.4px] tracking-[-0.02em] '>
        {dateValue}
      </h4>
    </div>
  )
}

export default DateItem
