interface Props {
  children: React.ReactNode
}
const MainWrapper = ({ children }: Props) => {
  return (
    <div className='flex flex-col items-start py-[48px] md:py-[56px] px-[24px] md:px-[56px]  w-[343px] md:w-[840px] min-h-[486px] md:min-h-[651px] bg-white rounded-t-[24px] rounded-bl-[24px] rounded-br-[200px] m-auto'>
      {children}
    </div>
  )
}

export default MainWrapper
