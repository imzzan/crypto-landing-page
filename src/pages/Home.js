import React from 'react'
import { AnaliticPage, Features, GetAppPage, HeroSection, Penawaran, SellPageNft, Testimoni } from '../components'

const Home = () => {
  return (
    <div className='px-5 sm:px-7 lg:px-14'>
      <HeroSection/>
      <Features/>
      <AnaliticPage/>
      <GetAppPage/>
      <SellPageNft/>
      <Testimoni/>
      <Penawaran/>
    </div>
  )
}

export default Home