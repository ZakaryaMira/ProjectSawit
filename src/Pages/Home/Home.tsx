import React from 'react'
import NavHome from '../../Components/Home/NavHome'
import HomeMain from '../../Components/Home/HomeMain'
import svgimage from '../../SVG/VotingHome.svg'

const Home: React.FC = () => {
  return (
    <>
        <NavHome/>
        <section className='bg-[#98C1D9] p-1 shadow-md h-260 flex justify-center items-center'>
          <HomeMain/>
          <div>
            <img src={svgimage} alt="" />
          </div>
        </section>
    </>
  )
}

export default Home