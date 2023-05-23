interface Props {
  dateValue: string;
  dateLabel: string;
}

const DateItem = ({dateLabel, dateValue}: Props) => {
  return (
    <div className='flex items-start w-[728px] h-[114px]  '>
      <span className='h-full w-[138px] flex items-center font-poppinsExtraBoldItalic italic font-extrabold text-[104px] text-[#854DFF]'>
        {dateLabel || '- -'}
      </span>
      <h4 className='w-[301px] h-[114px] font-poppins font-extrabold text-[104px] italic leading-[114.4px] tracking-[-0.02em] '>
        {dateValue}
      </h4>
      
    </div>
  )
}

export default DateItem