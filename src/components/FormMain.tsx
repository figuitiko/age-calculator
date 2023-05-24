import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ButtonAction from './ButtonAction'
import { useFormStore } from '../store/store'
import { type FC } from 'react'

const currentYear = new Date().getFullYear()
interface Props {
  dayLabel: string
  monthLabel: string
  yearLabel: string
}
const schema = yup.object({
  day: yup.number().integer('Must be a valid day').required('Must be a valid day').max(31, 'Must be a valid day').min(1, 'Must be a valid day')
    .when('month', {
      is: 2,
      then: (schema) => schema.min(1, 'Must be a valid day').max(28, 'Must be a valid day february'),
      otherwise: (schema) => schema.min(1, 'Must be a valid day').max(31, 'Must be a valid day')
    })
    .when('year', {
      is: (val: number) => val % 4 === 0,
      then: (schema) => schema.min(1, 'Must be a valid day').max(29, 'Must be a valid day february'),
      otherwise: (schema) => schema.min(1, 'Must be a valid day').max(28, 'Must be a valid day february')
    }),
  month: yup.number().positive().integer('Must be a valid day').required('Must be a valid day').max(12, 'Must be a valid month').min(1, 'Must be a valid month'),
  year: yup.number().positive().integer('Must be a valid day').required('Must be a valid day').min(1900, 'Must be a valid year').max(currentYear, 'Must be a valid year')
}).required()
type FormData = yup.InferType<typeof schema>

const FormMain = ({ dayLabel, monthLabel, yearLabel }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const setMonth = useFormStore(state => state.setMonth)
  const setDay = useFormStore(state => state.setDay)
  const setYear = useFormStore(state => state.setYear)
  const onSubmit = (data: FormData) => {
    console.log(data)
    const { day, month, year } = data
    setDay(day)
    setMonth(month)
    setYear(year)
  }
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <form className='flex flex-col' onSubmit={ handleSubmit(onSubmit) }>
      <div className='flex gap-[1rem] md:gap-[2rem]'>
        <div className='flex flex-col w-[87.7px] md:w-[160px] h-[76px] md:h-[101px]'>
          <label className={`${(errors.day != null) ? 'text-red-400' : 'text-gray-500'} text-xs md:text-sm font-poppins font-bold`}>{dayLabel.toUpperCase()}</label>
          <input
            {...register('day')}
            type='number'
            className={`${(errors.day != null) ? 'border-red-400' : 'border-gray-300'} input-field max-h-[108px]
             placeholder:text-poppins placeholder:font-bold md:placeholder:text-3xl text-poppins font-bold text-xl md:text-3xl  
             appearance-none w-full h-full text-left px-[12px] md:px-[24px]`}
            placeholder='DD'
            />
            <p className='text-red-400'>{errors.day?.message}</p>
        </div>
        <div className='flex flex-col w-[87.7px] md:w-[160px] h-[76px] md:h-[101px]' >
          <label className={`${(errors.month != null) ? 'text-red-400' : 'text-gray-500'} text-xs md:text-sm  font-poppins font-bold`}>{monthLabel.toUpperCase()}</label>
          <input
             {...register('month')}
             type='number'
             className={`${(errors.month != null) ? 'border-red-400' : 'border-gray-300'} input-field max-h-[108px]
              placeholder:text-poppins placeholder:font-bold  placeholder:text-xl md:placeholder:text-3xl text-poppins font-bold text-xl md:text-3xl 
              appearance-none w-full h-full text-left px-[12px] md:px-[24px]`}
             placeholder='MM' />
            <p className='text-red-400'>{errors.month?.message}</p>
        </div>
        <div className='flex flex-col w-[87.7px] md:w-[160px] h-[76px] md:h-[101px]'>
        <label className={`${(errors.year != null) ? 'text-red-400' : 'text-gray-500'} text-xs md:text-sm  font-poppins font-bold`}>{yearLabel.toUpperCase()}</label>
        <input
          {...register('year')}
          type='number'
          className={`${(errors.year != null) ? 'border-red-400' : 'border-gray-300'} input-field max-h-[108px]
           placeholder:text-poppins placeholder:font-bold md:placeholder:text-3xl text-poppins font-bold text-xl md:text-3xl 
           appearance-none w-full h-full text-left px-[12px] md:px-[24px]`}
          placeholder='YYYY' />
           <p className='text-red-400'>{errors.year?.message}</p>
        </div>
      </div>
      <ButtonAction />
    </form>
  )
}

export default FormMain
