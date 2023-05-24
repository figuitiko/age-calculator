import iconArrow from '../assets/images/icon-arrow.svg'

const ButtonAction = () => {
  return (
    <div className='flex flex-col md:flex-row items-center w-[295px] md:w-[728px] h-[64px] md:h-[96px] mt-[32px] md:mt-0'>
      <hr className='border-[#DCDCDC] w-[295px] md:w-[632px] h-[1px] mt-[20px]' />
      <button type='submit' className='rounded-[50%] bg-[#854dff] w-[64px] md:w-[96px] h-[64px] md:h-[96px] flex items-center justify-center mt-[-32px] md:mt-0  '>
        <picture className='h-[44px] w-[44px] min-w-full min-h-full'>
          <img src={iconArrow} alt='arrow' className=' min-w-full min-h-full' />
        </picture>
      </button>
    </div>
  )
}

export default ButtonAction
