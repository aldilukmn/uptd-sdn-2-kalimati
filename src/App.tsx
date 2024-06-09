import './App.css'
import Content from './components/content'
import Dates from './components/dates'
import Jumbotron from './components/jumbotron'
import Navbar from './components/navbar'
import News from './components/news'

function App() {
  return (
    <>
      <div className='bg-white my-36 mx-40 py-5 px-10 rounded font-patrick-hand'>
        <Navbar/>
        <div className='my-10'>
          <section className='flex gap-7'>
            <Jumbotron/>
            <Dates/>
          </section>
        </div>
        <div>
          <section className='flex gap-7'>
            <Content/>
            <News/>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
