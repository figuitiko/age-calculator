interface Props {
  children: React.ReactNode
}
const MainWrapper = ({children}:Props ) => {
  
  return (
    <div className='flex flex-col items-start p-[56px] w-[840px] m-h-651px bg-white rounded-t-[24px] rounded-bl-[24px] rounded-br-[200px] m-auto'>
      {children}
    </div>
  )
}

export default MainWrapper