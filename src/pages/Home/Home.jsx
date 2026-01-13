import React from 'react'
import MainBanner from '../../components/MainBanner'
import Categieros from '../../components/categieros/Categieros'
import BestSeller from '../../components/Best Seller/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categieros />
      <BestSeller />
    </div>
  )
}

export default Home
