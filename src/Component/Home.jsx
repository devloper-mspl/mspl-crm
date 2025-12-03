import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
          <div className="flex">
            <div className="w-full">
              <video src="/vedio.webm" autoPlay muted loop playsInline className="w-full h-auto object-contain md:object-cover"/>
            </div>
          </div>
          
      <Footer/>
    </div>
  )
  
}

export default Home