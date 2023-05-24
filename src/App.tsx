import DateWrapper from './components/DateWrapper'
import FormMain from './components/FormMain'
import MainWrapper from './components/MainWrapper'

function App () {
  return (
    <MainWrapper>
      <FormMain dayLabel='day' monthLabel='month' yearLabel='year' />
      <DateWrapper />
    </MainWrapper>
  )
}

export default App
