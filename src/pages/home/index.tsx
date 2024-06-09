import Jumbotron from '../../components/jumbotron'
import Dates from '../../components/dates'
import Content from '../../components/content'
import News from '../../components/news'

function Home() {
  return (
    <>
      <div className='my-10'>
        <section className='md:flex gap-7'>
          <Jumbotron/>
          <Dates/>
        </section>
      </div>
      <div>
        <section className='md:flex gap-7'>
          <Content/>
          <News/>
        </section>
      </div>
    </>
  )
}

export default Home