import { useEffect, useState } from 'react'
import { formatTime } from '../../libs/modules/formatTime'
import { formatDate } from '../../libs/modules/formatDate';

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    setTimeout(() => {
      setIsVisible(true)
    }, 50);
    
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <section className={`bg-black text-white text-center px-5 py-2 rounded-b-md lg:w-60 lg:text-base md:w-52 md:text-sm w-44 text-xs mx-auto fixed z-50 inset-x-0 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-75 dark:opacity-100' : '-translate-y-full opacity-0'}`}>
        <h1>{formatTime(currentTime)}</h1>
        <h2>{formatDate(currentTime)}</h2>
      </section>
    </>
  )
}

export default Time