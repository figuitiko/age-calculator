import iconArrow from '../assets/images/icon-arrow.svg'

const ButtonAction = () => {
  return (
    <div className='flex items-center w-[728px] h-[96px]'>
      <hr className='border-[#DCDCDC] w-[632px] h-[1px]' />
      <button type='submit' className='rounded-[50%] bg-[#854dff]  w-[96px] h-[96px] flex items-center justify-center'>
        <img src={iconArrow} alt='arrow' className='h-[44px] w-[44px]' />
      </button>
    </div>
  )
}

export default ButtonAction